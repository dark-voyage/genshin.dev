import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import * as cs from '@database/cs'
import ds from '@database/ds'

composer.action(
    'characters',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.editMessageMedia(
            {
                type: 'photo',
                media:
                    'https://raw.githubusercontent.com/genshindev/telegram-bot/master/assets/characters.jpg',
                caption: message.characters.middleware
            },
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.middleware()
            }
        )
    }
)

composer.action(
    /character_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        const image = cs.CHARACTER_URL + `/${slug}/portrait`
        await ctx.editMessageMedia(
            {
                type: 'photo',
                media: { url: image, filename: '' },
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
