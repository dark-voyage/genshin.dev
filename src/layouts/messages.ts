/**
 * Message Template Layout Manager
 * @module layouts/messages
 */
import ds from '@database/ds'
import * as cs from '@database/cs'

export const start =
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

export const help =
    `<b>List of available commands:</b>` +
    `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` +
    `\n`

export const artifact = {
    action: async (item: string) => {
        const data = await ds(cs.ARTIFACT_URL + `/${item}`)
        return `<b>Detailed information about an artifact:</b>` +
          `\n` +
          `\n` +
          `🌀 <b>Item name:</b> <i>${data.name}</i>` +
          `\n` +
          `⭐ <b>Rarity:</b> ${'🌟'.repeat(data.max_rarity)}`
    },
    middleware: `<b>Choose what artifact you want to get info about:</b>`
}
