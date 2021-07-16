/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import voiceline from '@database/vl'
import { TelegrafContext } from '@type/telegraf'

export default async (ctx: TelegrafContext): Promise<void> => {
    const speeches = await voiceline()
    await ctx.replyWithVoice({
        filename: '',
        url: speeches[Math.floor(Math.random() * speeches.length)]
    })
}
