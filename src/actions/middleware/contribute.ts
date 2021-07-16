/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command(
    'contribute',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithHTML(message.contribute, {
            reply_markup: keyboard.contribute
        })
    }
)

middleware(composer)
consoles.module(__filename)
