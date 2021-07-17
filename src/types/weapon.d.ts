/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Rarity, Weapon as WeaponTypes } from '@type/additional'

export interface Weapon {
    name: string
    type: WeaponTypes
    rarity: Rarity
    baseAttack: number
    subStat:
        | string
        | 'CRIT Rate'
        | 'CRIT DMG'
        | 'ATK'
        | 'HP'
        | 'Elemental Mastery'
        | 'Energy Recharge'
    passiveName: string
    passiveDesc: string
    location: 'Crafting' | 'Gacha' | 'Starglitter Exchange' | 'Chests'
}
