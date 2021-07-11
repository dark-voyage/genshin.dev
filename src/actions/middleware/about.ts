import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.command(
    'about',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.replyWithPhoto(
            'https://raw.githubusercontent.com/genshindev/telegram-bot/master/assets/game.jpg',
            {
              parse_mode: 'HTML',
                caption: message.about.game,
                reply_markup: await keyboard.about('game')
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
