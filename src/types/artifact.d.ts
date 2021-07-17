/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Rarity } from '@type/additional'

export interface Artifact {
    name: string
    max_rarity: Rarity
    '2-piece_bonus': string
    '4-piece_bonus': string
}
