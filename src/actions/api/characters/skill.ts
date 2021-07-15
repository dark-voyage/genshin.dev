import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    /skill_info_(.+)_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        const indexData = parseInt(ctx.match[2])

        await ctx.editMessageText(
            await message.characters.skillInfo(slug, indexData),
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.skillInfo(slug)
            }
        )
    }
)

composer.action(
    /skill_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageText(await message.characters.skill(slug), {
            parse_mode: 'HTML',
            reply_markup: await keyboard.characters.skill(slug)
        })
    }
)

middleware(composer)
consoles.module(__filename)
