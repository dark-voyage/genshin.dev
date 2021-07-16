/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

export interface Material {
    'boss-material': BossMaterial
    'character-ascension': CharacterAscension
    'character-experience': CharacterExperience
    'common-ascension': CommonAscension
    'cooking-ingredients': CookingIngredients
    'local-specialties': LocalSpecialties
    'talent-book': TalentBook
    'talent-boss': undefined
    'weapon-ascension': undefined
    'weapon-experience': undefined
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
    rarity: 1 | 2 | 3 | 4 | 5
}

export interface CharacterExperience {
    items: CharacterExperienceItem[]
}

export interface CharacterExperienceItem {
    id: string
    name: string
    experience: number
    rarity: 1 | 2 | 3 | 4 | 5
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
    rarity: 1 | 2 | 3 | 4 | 5
}

export interface CookingIngredients {
    [key: string]: {
        name: string
        description: string
        rarity?: 1 | 2 | 3 | 4 | 5
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
        availability: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        source: string
        items: TalentBookItem[]
    }
}

export interface TalentBookItem {
    id: string
    name: string
    rarity: 1 | 2 | 3 | 4 | 5
}
