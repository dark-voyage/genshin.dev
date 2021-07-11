/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import ds from '@database/ds'
import * as cs from '@database/cs'
import { Markup } from 'telegraf'
import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types'

export const start: InlineKeyboardMarkup = Markup.inlineKeyboard([
    Markup.callbackButton(`Show more information`, `help`)
])

export const help: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [
        Markup.urlButton(
            `Join our community`,
            `https://t.me/thegenshinimpact_community`
        )
    ],
    [Markup.urlButton(`Official Website`, `https://genshin.mihoyo.com/en/home`)]
])

export const about = async (page: string): Promise<InlineKeyboardMarkup> => {
    const base = []
    const links = [
        Markup.urlButton(`Mihoyo's Discord`, `https://discord.gg/auevVWRSMK`),
        Markup.urlButton(
            `Genshindev's Discord`,
            `https://discord.gg/VPZHJWjtFp`
        )
    ]
    if (page === 'game') {
        base.push([Markup.callbackButton(`➡️`, `about_team`)])
        base.push(links)
    }

    if (page === 'team') {
        base.push([Markup.callbackButton(`⬅️`, `about_game`)])
        base.push(links)
    }

    if (!page) {
        base.push(links)
    }
    return Markup.inlineKeyboard(base)
}

export const contribute: InlineKeyboardMarkup = Markup.inlineKeyboard([
    [Markup.urlButton(`Our Organization`, `https://github.com/genshindev`)],
    [
        Markup.urlButton(
            `API used in this bot`,
            `https://github.com/genshindev/api`
        )
    ],
    [
        Markup.urlButton(
            `This repository`,
            `https://github.com/genshindev/telegram-bot`
        )
    ]
])

export const artifact = {
    action: Markup.inlineKeyboard([
        Markup.callbackButton(`⬅Back`, `artifacts`)
    ]),
    middleware: async (): Promise<InlineKeyboardMarkup> => {
        const base = []
        for (const artifact of await ds(cs.ARTIFACT_URL)) {
            base.push(
                Markup.callbackButton(
                    artifact
                        .replace(/-/gi, ' ')
                        .replace(/\b\w/g, (l) => l.toUpperCase()),
                    `artifact_${artifact}`
                )
            )
        }
        return Markup.inlineKeyboard(base, {
            wrap: (btn, index, currentRow) => currentRow.length > 2
        })
    }
}
