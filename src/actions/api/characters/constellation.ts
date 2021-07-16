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
    /constellation_info_(.+)_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        const indexData = parseInt(ctx.match[2])

        await ctx.editMessageText(
            await message.characters.constellationInfo(slug, indexData),
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.constellationInfo(slug)
            }
        )
    }
)

composer.action(
    /constellation_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageText(
            await message.characters.constellation(slug),
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.constellation(slug)
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
