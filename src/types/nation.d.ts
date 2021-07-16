/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { Element } from '@type/element'
import { Character } from '@type/character'

export interface Nation {
    name: string
    element: Element
    archon: Character
    controllingEntity: string
}
