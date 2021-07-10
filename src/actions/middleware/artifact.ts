import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command(
    'artifacts',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithHTML(message.artifact.middleware, {
            reply_markup: await keyboard.artifact()
        })
    }
)

middleware(composer)
consoles.module(__filename)
