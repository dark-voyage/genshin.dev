/**
 * Message Template Layout Manager
 * @module layouts/messages
 */
import ds from '@database/ds'
import * as cs from '@database/cs'

export const start: string =
    `<b>Welcome to Genshin Impact Telegram bot 😏!</b>` +
    `\n` +
    `\n` +
    ` Hey, do you know what? Neither do I. I already forgot. I... I'm a Genshin Impact assistant created by Genshindevs team that helps you to keep tracking information about Genshin Impact items, characters, guides. U_U` +
    `\n` +
    `\n` +
    `With my help, you can do (*^_^*):` +
    `\n` +
    `\n` +
    `<code>* Get information about items</code>` +
    `\n` +
    `<code>* Get informed about upcoming events</code>` +
    `\n` +
    `<code>* Check your item builds *coming soon*</code>` +
    `\n` +
    `<code>* Leave a feedback to admins</code>` +
    `\n` +
    `\n` +
    `Hey, I hope we can get to know each other O(∩_∩)O` +
    `\n` +
    `\n` +
    `<i>In order to see full detailed usage information of the bot, press the button below.</i>`

export const help: string =
    `<b>List of available commands:</b>` +
    `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` +
    `\n` +
    `/contribute - <code>enhance this bot</code>` +
    `\n` +
    `/about - <code>show this helper message</code>` +
    `\n` +
    `\n` +
    `<b>List of API commands:</b>` +
    `\n` +
    `\n` +
    `/artifacts - <code>get info about artifacts</code>`

export const about: string = 'Some text'

export const contribute: string =
    "<b>Hey Traveler,</b> (●'◡'●)" +
    `\n` +
    'If you would like to contribute to our project, ' +
    'take consider checking up & contributing our GitHub organization and our repositories!'

export const artifact: {
    action: (item: string) => Promise<string>
    middleware: string
} = {
    action: async (item: string): Promise<string> => {
        const data = await ds(cs.ARTIFACT_URL + `/${item}`)
        return (
            `<b>Detailed information about an artifact:</b>` +
            `\n` +
            `\n` +
            `🌀 <b>Item name:</b> <i>${data.name}</i>` +
            `\n` +
            `⭐ <b>Rarity:</b> ${'🌟'.repeat(data.max_rarity)}` +
            `\n` +
            `\n` +
            `✨ <b>Bonuses:</b>` +
            `\n` +
            `<code>2 Piece Bonus: ${data['2-piece_bonus']}</code>` +
            `\n` +
            `<code>4 Piece Bonus: ${data['4-piece_bonus']}</code>`
        )
    },
    middleware: `<b>Choose what artifact you want to get info about:</b>`
}
