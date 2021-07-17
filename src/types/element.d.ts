/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Vision, VisionKey } from '@type/additional'

export interface Element {
    name: Vision
    key: VisionKey
    reactions: Reactions[]
}

export interface Reactions {
    name: string
    elements: Element[]
    description: string
}
