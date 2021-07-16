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
    /artifact_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageText(await message.artifact.action(slug), {
            parse_mode: 'HTML',
            reply_markup: await keyboard.artifact.action
        })
    }
)

composer.action(
    'artifacts',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.editMessageText(message.artifact.middleware, {
            parse_mode: 'HTML',
            reply_markup: await keyboard.artifact.middleware()
        })
    }
)

middleware(composer)
consoles.module(__filename)
