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

export const artifact = {
    action: Markup.inlineKeyboard([Markup.callbackButton(`⬅Back`, `artifacts`)]),
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
