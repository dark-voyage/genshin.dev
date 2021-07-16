/*
 * Copyright (c) 2020 genshin.dev
 * Licensed under the Open Software License version 3.0
 */

import { join } from 'path'
import { promises } from 'fs'

export default async (): Promise<string[]> => {
    return JSON.parse(
        await promises.readFile(join('./', 'voicelines.json'), {
            encoding: 'utf-8'
        })
    )
}
