import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    /about_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const match = ctx.match[1]
        await ctx.editMessageText(message.about[match], {
            parse_mode: 'HTML',
            reply_markup: await keyboard.about(match),
            disable_web_page_preview: true
        })
    }
)

middleware(composer)
consoles.module(__filename)
