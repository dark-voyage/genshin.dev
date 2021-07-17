/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Rarity, Weekdays } from './additional'

export interface Material {
    'boss-material': BossMaterial
    'character-ascension': CharacterAscension
    'character-experience': CharacterExperience
    'common-ascension': CommonAscension
    'cooking-ingredients': CookingIngredients
    'local-specialties': LocalSpecialties
    'talent-book': TalentBook
    'talent-boss': TalentBoss
    'weapon-ascension': WeaponAscension
    'weapon-experience': WeaponExperience
}

export interface BossMaterial {
    [key: string]: {
        id: string
        name: string
        source: string
    }
}

export interface CharacterAscension {
    [key: string]: {
        silver: CharacterAscensionItem
        fragment: CharacterAscensionItem
        chunk: CharacterAscensionItem
        gemstone: CharacterAscensionItem
    }
}

export interface CharacterAscensionItem {
    id: string
    name: string
    sources: [string]
    rarity: Rarity
}

export interface CharacterExperience {
    items: CharacterExperienceItem[]
}

export interface CharacterExperienceItem {
    id: string
    name: string
    experience: number
    rarity: Rarity
}

export interface CommonAscension {
    [key: string]: {
        characters?: [string]
        weapons?: [string]
        items: CommonAscensionCharacterItem[]
        sources: [string]
    }
}

export interface CommonAscensionCharacterItem {
    id: string
    name: string
    rarity: Rarity
}

export interface CookingIngredients {
    [key: string]: {
        name: string
        description: string
        rarity?: Rarity
        sources: [string]
    }
}

export interface LocalSpecialties {
    [key: string | 'mondstadt' | 'liyue']: LocalSpecialtiesItem[]
}

export interface LocalSpecialtiesItem {
    id: string
    name: string
    characters: [string]
}

export interface TalentBook {
    [
        key:
            | string
            | 'freedom'
            | 'resistance'
            | 'ballad'
            | 'prosperity'
            | 'diligence'
            | 'gold'
    ]: {
        characters: [string]
        availability: Weekdays
        source: string
        items: TalentBookItem[]
    }
}

export interface TalentBookItem {
    id: string
    name: string
    rarity: Rarity
}

export interface TalentBoss {
    [key: string]: {
        id: string
        name: string
        characters: [string]
    }
}

export interface WeaponAscension {
    [
        key:
            | string
            | 'decarabian'
            | 'boreal'
            | 'dandelion'
            | 'guyun'
            | 'elixir'
            | 'aerosiderite'
    ]: {
        weapons: [string]
        availability: Weekdays
        source: string
        items: WeaponAscensionItem[]
    }
}

export interface WeaponAscensionItem {
    id: string
    name: string
    rarity: Rarity
}

export interface WeaponExperience {
    items: WeaponExperienceItem[]
}

export interface WeaponExperienceItem {
    id: string
    name: string
    experience: number
    rarity: Rarity
    source: [string]
}
