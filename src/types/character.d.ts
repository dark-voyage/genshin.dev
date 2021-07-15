export interface Character {
    name: string
    vision: 'Anemo' | 'Geo' | 'Pyro' | 'Cryo' | 'Hydro' | 'Electro' | 'Dendro'
    weapon: 'Sword' | 'Bow' | 'Polearm' | 'Catalyst' | 'Claymore'
    nation?: 'Monstadt' | 'Liyue'
    affiliation?: string
    rarity: 3 | 4 | 5
    constellation: string
    birthday?: string | Date
    description: string
    skillTalents: Skill[]
    passiveTalents: Passive[]
    constellations: Constellation[]
    vision_key:
        | 'ANEMO'
        | 'GEO'
        | 'PYRO'
        | 'CRYO'
        | 'HYDRO'
        | 'ELECTRO'
        | 'DENDRO'
    weapon_type: 'SWORD' | 'BOW' | 'POLEARM' | 'CATALYST' | 'CLAYMORE'
}

export interface Skill {
    name: string
    unlock: string
    description: string
    type: string
    upgrades: SkillUpgrades[]
}

export interface SkillUpgrades {
    name: string
    value: string
}

export interface Passive {
    name: string
    unlock: string
    description: string
    level: number
}

export interface Constellation {
    name: string
    unlock:
        | 'Constellation Lv. 1'
        | 'Constellation Lv. 2'
        | 'Constellation Lv. 3'
        | 'Constellation Lv. 4'
        | 'Constellation Lv. 5'
        | 'Constellation Lv. 6'
    description: string
    level: 1 | 2 | 3 | 4 | 5 | 6
}
