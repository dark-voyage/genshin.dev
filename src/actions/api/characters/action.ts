import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'
import objectPicture from '@utils/objectPicture'

composer.action(
    /character_picture_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        await objectPicture(ctx, `characters/${ctx.match[1]}`, 'portrait')
    }
)

composer.action(
    /character_(.*)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageText(await message.characters.action(slug), {
            parse_mode: 'HTML',
            reply_markup: await keyboard.characters.action(slug)
        })
    }
)

composer.action(
    'characters',
    async (ctx: TelegrafContext): Promise<void> => {
        await ctx.editMessageText(message.characters.middleware, {
            parse_mode: 'HTML',
            reply_markup: await keyboard.characters.middleware()
        })
    }
)

middleware(composer)
consoles.module(__filename)
