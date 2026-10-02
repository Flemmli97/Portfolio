import { projects } from '../data'
import type { Project, ProjectEntry } from '../types'

// so during dev it doesnt get rate limited
// oxlint-disable-next-line no-constant-binary-expression
const dummy = true && import.meta.env.DEV
const cacheKey = 'projects'
const cacheTTL = 60 * 60 * 1000

type SerializedProject = Omit<ProjectEntry, 'project'> & {
  project: string
}

export async function getProjectEntries(): Promise<ProjectEntry[]> {
  const cached = localStorage.getItem(cacheKey)
  if (!dummy && cached) {
    const { time, data } = JSON.parse(cached) as {
      time: number
      data: SerializedProject[]
    }
    if (Date.now() - time < cacheTTL) {
      const projectLookup = Object.fromEntries(projects.map((project) => [project.name, project]))
      return data.map<ProjectEntry>((project) => {
        return { ...project, project: projectLookup[project.project]! }
      })
    }
  }
  const projectEntries = await Promise.all(projects.map(getProjectsStats))
  localStorage.setItem(
    cacheKey,
    JSON.stringify({
      time: Date.now(),
      data: projectEntries.map<SerializedProject>((entry) => {
        return { ...entry, project: entry.project.name }
      }),
    }),
  )
  return projectEntries
}

// Sadge need api key for everything...
const curseForgeApiKey = import.meta.env.VITE_CURSEFORGE_API_KEY
async function fetchJson<T>(url: string, init?: RequestInit): Promise<T | undefined> {
  try {
    const response = await fetch(url, init)
    if (!response.ok) return undefined
    return response.json() as Promise<T>
  } catch {
    return undefined
  }
}

function getUrlPath(url: string) {
  try {
    return new URL(url).pathname.split('/').filter(Boolean)
  } catch {
    return []
  }
}

async function fetchStars(url: string) {
  const repository = getUrlPath(url)
  if (!repository || repository.length !== 2) return undefined
  const data = await fetchJson<{ stargazers_count: number }>(
    `https://api.github.com/repos/${repository[0]}/${repository[1]!.replace(/\.git$/, '')}`,
  )
  return data?.stargazers_count
}

async function modrinthData(url: string) {
  const slug = getUrlPath(url).at(-1)
  if (!slug) return undefined

  const data = await fetchJson<{ downloads: number }>(
    `https://api.modrinth.com/v2/project/${encodeURIComponent(slug)}`,
  )
  return data?.downloads
}

async function curseforgeData(url: string) {
  if (!curseForgeApiKey) return undefined

  const slug = getUrlPath(url).at(-1)
  if (!slug) return undefined

  // Minecraft: 432
  const params = new URLSearchParams({ gameId: '432', slug })
  const data = await fetchJson<{ data?: { downloadCount?: number }[] }>(
    `https://api.curseforge.com/v1/mods/search?${params}`,
    { headers: { 'x-api-key': curseForgeApiKey as string } },
  )
  return data?.data?.[0]?.downloadCount
}

async function getProjectsStats(project: Project): Promise<ProjectEntry> {
  if (dummy) {
    return {
      project: project,
      stars: 100000000,
      downloads: {
        modrinth: 1,
        curseforge: 1,
      },
      downloadsTotal: 2,
    }
  }
  const github = project.hrefs.find((href) => href.type === 'github')

  const [stars, downloads] = await Promise.all([
    github ? fetchStars(github.url) : Promise.resolve(undefined),
    Promise.all(
      project.hrefs.map(async (href) => {
        if (href.type === 'curseforge' || href.type === 'modrinth') {
          const downloadNumber =
            href.type === 'modrinth' ? await modrinthData(href.url) : await curseforgeData(href.url)
          if (downloadNumber) {
            return { type: href.type, downloads: downloadNumber ?? 0 }
          }
          return undefined
        }
      }),
    ),
  ])

  const downloadResult = downloads.reduce<Record<string, number>>((downloads, result) => {
    if (result) {
      downloads[result.type] = (downloads[result.type] ?? 0) + result.downloads
    }
    return downloads
  }, {})
  return {
    project: project,
    stars: stars,
    downloads: downloadResult,
    downloadsTotal: Object.values(downloadResult).reduce((total, count) => total + count, 0),
  }
}
