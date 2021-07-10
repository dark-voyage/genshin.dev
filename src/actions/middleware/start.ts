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
    }
)

middleware(composer)
consoles.module(__filename)
