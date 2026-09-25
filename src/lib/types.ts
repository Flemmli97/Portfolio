export interface Project {
  name: string
  summary: string
  description?: string
  tags: string[]
  hrefs: {
    url: string
    type: LinkType
  }[]
  icon?: string
  banner?: string
}

export type LinkType = 'github' | 'curseforge' | 'modrinth' | 'external'

export const LinkTypeNames: Record<LinkType, [string, string]> = {
  github: ['Github', 'simple-icons:github'],
  curseforge: ['Curseforge', 'simple-icons:curseforge'],
  modrinth: ['Modrinth', 'thesvg-color:modrinth'],
  external: ['URL', 'akar-icons:globe'],
}

export interface ProjectEntry {
  project: Project
  stars?: number
  downloadsTotal?: number
  downloads: Record<string, number>
}

export interface Skill {
  name: string
  icon: string
}

export type SkillCategory = 'Language' | 'Frameworks' | 'Data & ML' | 'Tools'

export enum Size {
  DEFAULT,
  LARGE,
  LARGER,
  LARGEST,
  SMALL,
  SMALLER,
}
