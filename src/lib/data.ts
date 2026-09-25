import type { Project, Skill, SkillCategory } from './types'

export const github = 'https://github.com/Flemmli97'

export const projects: Project[] = [
  {
    name: 'Flan',
    summary: 'A serverside claiming mod for minecraft',
    description: `Higly customizable serverside land claiming mod for minecraft.
    ### **Features**
    * A chunk independent claiming system. Claim regions can be arbitrary in size
    * Extensive management of claims with a wide range of permission for maximum customizations
    * Subclaim system allowing claims within claims
    * Fully serversided and thus vanilla client friendly`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/Flan', type: 'github' },
      { url: 'https://modrinth.com/mod/flan', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/flan', type: 'curseforge' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/flan-forge', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/Flan/refs/heads/26.3/common/src/main/resources/icon.png',
  },
  {
    name: 'Improved Mobs',
    summary:
      'A minecraft mod increasing the difficulty of the game with better gear, ai and pathfinding.',
    description: `A minecraft mod drastically increasing the difficulty of the game with an added over time increasing difficulty
    value and various mob abilities
    ### Features
    * Highly configurable difficulty scaling
    * Mob abilities such as block breaking, advanced pathfinding, ladder climbing etc.
    * Attribute scaling with difficulty value
    * Equipment for mobs`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/ImprovedMobs', type: 'github' },
      { url: 'https://modrinth.com/mod/improved-mobs', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/improved-mobs', type: 'curseforge' },
      {
        url: 'https://www.curseforge.com/minecraft/mc-mods/improved-mobs-fabric',
        type: 'curseforge',
      },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/ImprovedMobs/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Mob Battle Mod',
    summary: 'A mod adding various utensils to make mob battles',
    description: `Adds various items to allow for easy creation and management of mob battles such as mob enrager, equipment editor etc.`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/MobBattle', type: 'github' },
      { url: 'https://modrinth.com/mod/mob-battle-mod', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/mob-battle-mod', type: 'curseforge' },
      {
        url: 'https://www.curseforge.com/minecraft/mc-mods/mob-battle-mod-fabric',
        type: 'curseforge',
      },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/MobBattle/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'RuneCraftory',
    summary: 'A minecraft mod based on the franchise Rune Factory',
    banner: 'https://i.imgur.com/6I8Lwxt.png',
    description: `Minecraft mod based on the [Rune Factory](https://en.wikipedia.org/wiki/Rune_Factory) franchise.  
    ### Features
    * An extensive farming experience with lots of crops and trees, changing seasons etc.
    * Multiple new weapon types coupled with a custom combat system and animation
    * Lots of new (tameable) monster and bosses with unique drops
    * New crafting tables to make various gear and items
    * NPCs to interact and befriend with. No more boring villagers!
    * A leveling and skill system to increase your stats`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/RuneCraftory', type: 'github' },
      { url: 'https://modrinth.com/mod/runecraftory', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/runecraftory', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/RuneCraftory/refs/heads/1.21.1/common/src/main/resources/logo.png',
  },
  {
    name: 'Fate - Unlimited Block Works',
    summary: 'A minecraft mod based on the Fate franchise',
    banner:
      'https://cdn.modrinth.com/data/q021y7rs/images/eef19ed67af5faa8397ab9518a007b5f8049f619.png',
    description: `Minecraft mod based on the [Fate](https://en.wikipedia.org/wiki/Fate_(franchise)) franchise by TypeMoon 
    bringing the hole grail war to minecraft.
    ### Features
    * Battle Royal system against other players/servants
    * Summon powerful servants to fight alongside you
    * Reward from the Holy Grail granting powerful gear and buffs`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/FateUBW', type: 'github' },
      { url: 'https://modrinth.com/mod/fate-ubw', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/fate-ubw', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/FateUBW/refs/heads/1.21.1/common/src/main/resources/assets/fateubw/textures/item/command_seal_1.png',
  },
  {
    name: 'TenshiLib',
    summary:
      'A library minecraft mod containing shared utilities/functionality for all my other mods',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/TenshiLib', type: 'github' },
      { url: 'https://modrinth.com/mod/tenshilib', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/tenshilib', type: 'curseforge' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/tenshilib-fabric', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/TenshiLib/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Crimson Bot',
    summary:
      'All in one discord bot containing moderation tools, custom commands, wiki integration etc.',
    description: `All in one discord bot.  
      ### Features
      * Moderation (timeout, warnings etc.)
      * Message Loggins
      * Honeypot for scammers
      * Automatic file paste uploads
      * Wiki integration with \`Blazing Docs\`
      * And more...`,
    tags: ['Python', 'Discord', 'SQLite'],
    hrefs: [{ url: 'https://github.com/Flemmli97/CrimsonBot', type: 'github' }],
    icon: 'simple-icons:github',
  },
  {
    name: 'Portfolio',
    summary: 'The project for this website',
    tags: ['Vue', 'TypeScript', 'Web'],
    hrefs: [{ url: 'https://github.com/Flemmli97/Portfolio', type: 'github' }],
    icon: 'simple-icons:github',
  },
  {
    name: 'Multiloader Plugin',
    summary: 'Gradle plugin aiding in developing minecraft mods for multiple loaders',
    description: `Gradle plugin aiding in developing minecraft mods for multiple loaders.  
    Supports forge, neoforge and fabric loaders.  
    Modular and able to handle auto publish and uploads of mods.`,
    tags: ['Gradle', 'Kotlin', 'Minecraft', 'Mods', 'Devops'],
    hrefs: [{ url: 'https://github.com/Flemmli97/GradleScripts', type: 'github' }],
    icon: 'simple-icons:github',
  },
  {
    name: 'Blazing Docs',
    summary: 'Documentation for various mods',
    tags: ['TypeScript', 'Web', 'Docs'],
    hrefs: [{ url: 'https://github.com/Flemmli97/BlazingDocs', type: 'github' }],
    icon: 'simple-icons:github',
  },
  {
    name: 'Advanced Golems',
    summary: 'A minecraft mod adding a small golem for base protection',
    description: `Adds a small craftable golem able to patrol around a certain position attacking hostile mobs. 
    Golem can be improved with and hold various items.`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/AdvancedGolems', type: 'github' },
      { url: 'https://modrinth.com/mod/advanced-golems', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/advanced-golems', type: 'curseforge' },
      {
        url: 'https://www.curseforge.com/minecraft/mc-mods/advanced-golems-fabric',
        type: 'curseforge',
      },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/AdvancedGolems/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Debug Utils',
    summary: 'A mod giving access to mojangs debugging tools',
    description: `For older versions: Enables mojangs debugging tools that are not available otherwise.  
    For modern versions allows toggling without fiddling with jvm arguments and game restarts`,
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/DebugUtils', type: 'github' },
      { url: 'https://modrinth.com/mod/debugutils', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/debug-utils', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/DebugUtils/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Simple Quests',
    summary: 'A serverside questing mod',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/SimpleQuests', type: 'github' },
      { url: 'https://modrinth.com/mod/simple-quests', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/simple-quests', type: 'curseforge' },
      {
        url: 'https://www.curseforge.com/minecraft/mc-mods/simple-quests-forge',
        type: 'curseforge',
      },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/SimpleQuests/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Villager Trades',
    summary: 'A serverside mod aiding in creating custom villager trades',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/VillagerTrades', type: 'github' },
      { url: 'https://modrinth.com/mod/villagertradesedit', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/villagertradeedit', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/VillagerTrades/refs/heads/1.21/common/src/main/resources/icon.png',
  },
  {
    name: 'Lingua Bibliotheca',
    summary: 'A serverside translation lib',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [{ url: 'https://github.com/Flemmli97/LinguaBibliotheca', type: 'github' }],
  },
  {
    name: 'Smart Keep Inventory',
    summary: 'A serverside mod allowing conditional keep inventory rules',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/SmartKeepInventory', type: 'github' },
      { url: 'https://modrinth.com/mod/smart-keep-inventory', type: 'modrinth' },
      {
        url: 'https://www.curseforge.com/minecraft/mc-mods/smart-keep-inventory',
        type: 'curseforge',
      },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/SmartKeepInventory/refs/heads/1.21.1/common/src/main/resources/icon.png',
  },
  {
    name: 'Equal Loot',
    summary: 'A serverside allowing loot share between players for mobs',
    tags: ['Java', 'Minecraft', 'Mods'],
    hrefs: [
      { url: 'https://github.com/Flemmli97/EqualLoot', type: 'github' },
      { url: 'https://modrinth.com/mod/equal-loot', type: 'modrinth' },
      { url: 'https://www.curseforge.com/minecraft/mc-mods/equal-loot', type: 'curseforge' },
    ],
    icon: 'https://raw.githubusercontent.com/Flemmli97/EqualLoot/refs/heads/1.21.1/common/src/main/resources/icon.png',
  },
]

export const skills: Record<SkillCategory, Skill[]> = {
  Language: [
    { name: 'Java', icon: 'devicon:java' },
    { name: 'Python', icon: 'devicon:python' },
    { name: 'Rust', icon: 'devicon:rust' },
    { name: 'Kotlin', icon: 'devicon:kotlin' },
    { name: 'JavaScript', icon: 'devicon:javascript' },
    { name: 'TypeScript', icon: 'devicon:typescript' },
    { name: 'HTML', icon: 'logos:html-5' },
    { name: 'CSS/SCSS', icon: 'devicon:css' },
    { name: 'SQL', icon: 'at-icons:database' },
  ],
  Frameworks: [
    { name: 'React', icon: 'devicon:react' },
    { name: 'Svelte', icon: 'devicon:svelte' },
    { name: 'Node', icon: 'devicon:nodejs' },
    { name: 'NextJS', icon: 'devicon:nextjs' },
    { name: 'Spring/SpringBoot', icon: 'devicon:spring' },
    { name: 'Hibernate', icon: 'devicon:hibernate' },
    { name: 'Vue', icon: 'logos:vue' },
  ],
  'Data & ML': [
    { name: 'Pandas', icon: 'devicon:pandas' },
    { name: 'NumPy', icon: 'devicon:numpy' },
    { name: 'Scikit-learn', icon: 'thesvg-color:scikit-learn' },
    { name: 'TensorFlow', icon: 'devicon:tensorflow' },
    { name: 'Matplotlib', icon: 'devicon:matplotlib' },
    { name: 'SQLite', icon: 'devicon:sqlite' },
    { name: 'Json', icon: 'devicon:json' },
  ],
  Tools: [
    { name: 'Git', icon: 'devicon:git' },
    { name: 'Gradle', icon: 'devicon:gradle' },
    { name: 'Docker', icon: 'devicon:docker' },
    { name: 'VSCode', icon: 'devicon:vscode' },
    { name: 'Intellij IDEA', icon: 'devicon:intellij' },
  ],
}
