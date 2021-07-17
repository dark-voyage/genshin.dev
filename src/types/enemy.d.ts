/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Element } from '@type/element'
import { Vision } from '@type/additional'

export interface Enemy {
    id: string
    name: string
    description: string
    region: string
    type: string
    family: string
    faction?: string
    elements: Element[]
    drops: Drop[]
    artifacts?: Artifact[]
    'elemental-description'?: ElementalDescription[]
    'mora-gained': number
}

export interface Drop {
    name: string
    rarity: number
    'minimum-level': number
}

export interface Artifact {
    name: string
    set: string
    rarity: string
}

export interface ElementalDescription {
    element: Vision
    description: string
}
