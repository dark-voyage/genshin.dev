import { composer, middleware } from '@core/bot'
import * as consoles from '@layouts/consoles'
import * as message from '@layouts/messages'
import * as keyboard from '@layouts/keyboards'
import { TelegrafContext } from '@type/telegraf'

composer.action(
    /talent_info_(.+)_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        const indexData = parseInt(ctx.match[2])

        await ctx.editMessageText(
            await message.characters.passiveTalentInfo(slug, indexData),
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.passiveTalentInfo(slug)
            }
        )
    }
)

composer.action(
    /talent_(.+)/gi,
    async (ctx: TelegrafContext): Promise<void> => {
        const slug = ctx.match[1]
        await ctx.editMessageText(
            await message.characters.passiveTalent(slug),
            {
                parse_mode: 'HTML',
                reply_markup: await keyboard.characters.passiveTalent(slug)
            }
        )
    }
)

middleware(composer)
consoles.module(__filename)
