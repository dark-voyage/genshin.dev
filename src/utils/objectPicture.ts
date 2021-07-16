import { BASE_URL } from '@database/cs'
import { TelegrafContext } from '@type/telegraf'
import { Markup } from 'telegraf'

export default async (
    ctx: TelegrafContext,
    link: string,
    type: 'icon' | 'portrait'
): Promise<void> => {
    await ctx.replyWithPhoto(
        { url: BASE_URL + '/' + link + '/' + type, filename: '' },
        {
            parse_mode: 'HTML',
            reply_markup: Markup.inlineKeyboard([
                [Markup.callbackButton(`🗑️ Delete the picture`, `delete`)]
            ])
        }
    )
}
