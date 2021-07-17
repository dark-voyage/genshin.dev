/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Rarity, Vision, VisionKey, Weapon, WeaponKey } from '@type/additional'

export interface Character {
    name: string
    vision: Vision
    weapon: Weapon
    nation?: 'Monstadt' | 'Liyue'
    affiliation?: string
    rarity: Rarity
    constellation: string
    birthday?: string | Date
    description: string
    skillTalents: CharacterSkill[]
    passiveTalents: CharacterPassive[]
    constellations: CharacterConstellation[]
    vision_key: VisionKey
    weapon_type: WeaponKey
}

export interface CharacterSkill {
    name: string
    unlock: string
    description: string
    type: string
    upgrades: SkillUpgrades[]
}

export interface CharacterSkillUpgrades {
    name: string
    value: string
}

export interface Passive {
    name: string
    unlock: string
    description: string
    level: number
}

export interface CharacterConstellation {
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
