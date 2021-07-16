/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

export interface Element {
    name: 'Anemo' | 'Geo' | 'Pyro' | 'Cryo' | 'Hydro' | 'Electro' | 'Dendro'
    key: 'ANEMO' | 'GEO' | 'PYRO' | 'CRYO' | 'HYDRO' | 'ELECTRO' | 'DENDRO'
    reactions: Reactions[]
}

export interface Reactions {
    name: string
    elements: Element[]
    description: string
}
