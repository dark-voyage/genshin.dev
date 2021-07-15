import { Element } from '@type/element'
import { Character } from '@type/character'

export interface Nation {
    name: string
    element: Element
    archon: Character
    controllingEntity: string
}
