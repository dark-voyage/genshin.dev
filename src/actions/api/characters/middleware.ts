import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command(
    'characters',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithPhoto(
            `https://raw.githubusercontent.com/genshindev/telegram-bot/master/assets/characters.jpg`,
            {
                parse_mode: 'HTML',
                caption: message.characters.middleware,
                reply_markup: await keyboard.characters.middleware()
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
