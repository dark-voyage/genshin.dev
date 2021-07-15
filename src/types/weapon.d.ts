export interface Weapon {
    name: string
    type: 'Sword' | 'Bow' | 'Polearm' | 'Catalyst' | 'Claymore'
    rarity: 3 | 4 | 5
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
