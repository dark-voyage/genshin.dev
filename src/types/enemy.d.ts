/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Element } from '@type/element'

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
    'elemental-description'?: Elementality[]
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

export interface Elementality {
    element: 'Anemo' | 'Geo' | 'Pyro' | 'Cryo' | 'Hydro' | 'Electro' | 'Dendro'
    description: string
}
