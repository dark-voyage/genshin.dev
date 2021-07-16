/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import env from '@core/env'

composer.help(
    async (ctx: TelegrafContext): Promise<void> => {
        if (ctx.chat.id === parseInt(env.GROUP)) {
            await ctx.replyWithHTML(message.help)
        }

        if (ctx.chat.id !== parseInt(env.GROUP)) {
            await ctx.replyWithHTML(message.help, {
                reply_markup: keyboard.help
            })
        }
    }
)

middleware(composer)
consoles.module(__filename)
