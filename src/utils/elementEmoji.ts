/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

export default async (
    element: 'ANEMO' | 'GEO' | 'PYRO' | 'CRYO' | 'HYDRO' | 'ELECTRO' | 'DENDRO'
): Promise<string> => {
    switch (element) {
        case 'ANEMO':
            return '🍃 Anemo'
        case 'GEO':
            return '🪨 Geo'
        case 'PYRO':
            return '🔥 Pyro'
        case 'CRYO':
            return '❄️ Cryo'
        case 'HYDRO':
            return '💧 Hydro'
        case 'ELECTRO':
            return '⚡ Electro'
        case 'DENDRO':
            return '☘️ Dendro'
    }
}
