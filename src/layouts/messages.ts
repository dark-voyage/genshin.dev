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
    `/about - <code>show this helper message</code>` +
    `\n` +
    `/contribute - <code>enhance this bot with us</code>` +
    `\n` +
    `\n` +
    `<b>List of API commands:</b>` +
    `\n` +
    `\n` +
    `/artifacts - <code>get info about artifacts</code>`

export const about = {
    game:
        '<b> Genshin Impact (原神)</b>' +
        `\n` +
        `\n` +
        'The latest open-world action RPG developed by miHoYo. The game features a massive, gorgeous map, an elaborate elemental combat system, engaging storyline & characters, co-op game mode, soothing soundtrack, and much more for you to explore!',
    team:
        '<b>Genshindevs</b>' +
        `\n` +
        `\n` +
        `An unofficial team that focuses on creating developer resources and user services.`
}

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

export const characters = {
    action: async (person: string): Promise<string> => {
        const data = await ds(cs.CHARACTER_URL + `/${person}`)
        const birthday = async (): Promise<string> => {
            if (data.birthday) {
                return (
                    `\n` +
                    `🎂 <b>Birthday:</b> <i>${new Date(data.birthday)
                        .toDateString()
                        .replace(/0000/, '')
                        .slice(4, -1)}</i>`
                )
            }

            if (!data.birthday) return ''
        }
        return (
            `<b>Detailed information about ${data.name}:</b>` +
            `\n` +
            `\n` +
            `🌀 <b>Name:</b> <i>${data.name}</i>` +
            `\n` +
            `⚔️ <b>Weapon:</b> <i>${data.weapon}</i>` +
            `\n` +
            `⭐ <b>Rarity:</b> ${'🌟'.repeat(data.rarity)}` +
            `${await birthday()}` +
            `\n` +
            `\n` +
            `✨ <b>Description:</b>` +
            `\n` +
            `${data.description}`
        )
    },
    middleware: `<b>Choose your character from the list above:</b>`,
    skill: async (person: string): Promise<string> => {
        const data = await ds(cs.CHARACTER_URL + `/${person}`)
        return (
            `<b>Information about skills of ${data.name}</b>` + `\n` + `\n` + ``
        )
    },
    skillInfo: async (person: string, indexData: number): Promise<string> => {
        const data = (await ds(cs.CHARACTER_URL + `/${person}`)).skillTalents[
            indexData
        ]
        let upgrades = ''
        if (data.upgrades) {
            upgrades += `<b>Upgrades:</b>` + `\n`
            for (const upgrade of data.upgrades) {
                upgrades += `<code>${upgrade.name}: ${upgrade.value}</code>\n`
            }
        }
        return (
            `<b>${data.name}</b>` +
            `\n` +
            `<b>Type:</b> ${data.unlock}` +
            `\n` +
            `\n` +
            `<b>Description:</b> ` +
            `\n` +
            `${data.description.replace(/\n/gi, '. ')}` +
            `\n` +
            `\n` +
            `${upgrades}`
        )
    },
    passiveTalent: async (person: string): Promise<string> => {
        const data = await ds(cs.CHARACTER_URL + `/${person}`)
        return `<b>Information about passive talents of ${data.name}</b>`
    },
    passiveTalentInfo: async (
        person: string,
        indexData: number
    ): Promise<string> => {
        const data = (await ds(cs.CHARACTER_URL + `/${person}`)).passiveTalents[
            indexData
        ]
        return (
            `<b>${data.name}</b>` +
            `\n` +
            `<b>Unlock:</b> ${data.unlock}` +
            `\n` +
            `<b>Level:</b> 🎚️ ${data.level}` +
            `\n` +
            `\n` +
            `<b>Description:</b> ` +
            `\n` +
            `${data.description.replace(/\n/gi, '. ')}`
        )
    },
    constellation: async (person: string): Promise<string> => {
        const data = await ds(cs.CHARACTER_URL + `/${person}`)
        return `<b>Information about constellations of ${data.name}</b>`
    },
    constellationInfo: async (
        person: string,
        indexData: number
    ): Promise<string> => {
        const data = (await ds(cs.CHARACTER_URL + `/${person}`)).constellations[
            indexData
        ]
        return (
            `<b>${data.name}</b>` +
            `\n` +
            `<b>Unlock:</b> ${data.unlock}` +
            `\n` +
            `<b>Level:</b> 🎚️ ${data.level}` +
            `\n` +
            `\n` +
            `<b>Description:</b> ` +
            `\n` +
            `${data.description.replace(/\n/gi, '. ')}`
        )
    }
}
