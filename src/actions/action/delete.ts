/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    'delete',
    async (ctx: TelegrafContext): Promise<void> => {
        try {
            await ctx.deleteMessage()
        } catch (error) {
            await ctx.answerCbQuery(
                `Oops, I can't delete this anymore... Delete it yourself!`,
                true
            )
        }
    }
)

middleware(composer)
consoles.module(__filename)
