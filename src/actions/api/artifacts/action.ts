import ds from '@database/ds'
import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    'artifacts',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithHTML(message.artifact.middleware, {
            reply_markup: await keyboard.artifact.middleware()
        })
    }
)

composer.action(
    /artifact_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.replyWithHTML(await message.artifact.action(slug), {
            reply_markup: await keyboard.artifact.action
        })
    }
)

middleware(composer)
consoles.module(__filename)
