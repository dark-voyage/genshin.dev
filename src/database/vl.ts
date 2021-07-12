import { join } from 'path'
import { promises } from 'fs'

export default async (): Promise<string[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'voicelines.json'), {
            encoding: 'utf-8'
        })
    )
}
