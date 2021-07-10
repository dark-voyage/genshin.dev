/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
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
