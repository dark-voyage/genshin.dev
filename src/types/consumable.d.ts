/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Rarity } from "@type/additional";

export interface Consumable {
    food: Food
    potion: Potion
}

export interface Food {
    [key: string]: {
        name: string
        rarity: Rarity
        type: string
        effect: string
        hasRecipe: boolean
        description: string
        proficiency: number
        recipe: Recipe[]
    }
}

export interface Recipe {
    item: string
    quantity: number
}

export interface Potion {
    name: string
    effect: string
    rarity: Rarity
    crafting: Crafting[]
}

export interface Crafting {
    item: string
    quantity: number
}
