/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.start(
    async (ctx: TelegrafContext): Promise<void> => {
        // TODO: Implement inline query with start fetch
        // switch (ctx.startPayload) {
        //     case 'object':
        //         await ctx.replyWithHTML(render(object), {
        //             reply_markup: keyboard.object
        //         })
        //         break
        //     default:
        //         await ctx.replyWithHTML(render(object), {
        //             reply_markup: keyboard.object
        //         })
        //         break
        // }

        await ctx.replyWithHTML(message.start, {
            reply_markup: keyboard.start
        })
        if (ctx.chat.type === 'private') {
            await ctx.replyWithVoice({
                filename: '',
                url:
                    'https://static.wikia.nocookie.net/gensin-impact/images/c/c2/VO_Qiqi_More_About_Qiqi_-_04.ogg/revision/latest?cb=20210112184859'
            })
        }
    }
)

middleware(composer)
consoles.module(__filename)
