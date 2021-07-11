import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
// import * as message from '@layouts/messages'
// import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command(
    'id',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithHTML(`<code>${ctx.chat.id}</code>`)
    }
)

middleware(composer)
consoles.module(__filename)
