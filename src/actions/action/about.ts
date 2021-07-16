/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    /about_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const match = ctx.match[1]
        await ctx.editMessageMedia(
            {
                type: 'photo',
                media: `https://raw.githubusercontent.com/genshindev/telegram-bot/master/assets/${match}.jpg`,
                caption: message.about[match]
            },
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.about(match),
                disable_web_page_preview: true
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
