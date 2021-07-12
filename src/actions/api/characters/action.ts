import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import * as cs from "@database/cs";

composer.action(
    'characters',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.editMessageText(message.characters.middleware, {
            parse_mode: 'HTML',
            reply_markup: await keyboard.characters.middleware()
        })
    }
)

composer.action(
    /character_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageMedia(
            {
                type: 'photo',
                media: cs.CHARACTER_URL + `/${slug}`,
                caption: await message.characters.action(slug)
            },
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.action
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
