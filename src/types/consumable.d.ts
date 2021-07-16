/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

export interface Consumable {
    food: Food
    potion: Potion
}

export interface Food {
    [key: string]: {
        name: string
        rarity: 1 | 2 | 3 | 4 | 5
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
    rarity: 1 | 2 | 3 | 4 | 5
    crafting: Crafting[]
}

export interface Crafting {
    item: string
    quantity: number
}
