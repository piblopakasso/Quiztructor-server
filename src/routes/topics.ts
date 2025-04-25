import { Router } from 'express';
import path from 'path'
import fs from 'fs/promises'
import { readJSONFile } from '../utils/readJSONFile'

const router = Router()

const topicsFilePath = path.join(process.cwd(), 'data', 'topics.json')

type Topic = {
    name: string
    count: number
}

router.get('/', async (_req, res) => {
    try {
        const data = await readJSONFile<Topic[]>(topicsFilePath)
        res.json(data)
    } catch (error) {
        console.error('Помилка при читанні файлу тем', error)
        res.status(500).json({ error: 'Не вдалося зчитати теми' })
    }
})

router.post('/', async (req, res) => {
    const newTopic: Topic = req.body

    if (!newTopic?.name) {
        return res.status(400).json({ error: 'Неправильна назва теми' })
    }

    try {
        const topics = await readJSONFile<Topic[]>(topicsFilePath)

        const alreadyExists = topics.some(
            topic => topic.name.toLowerCase() === newTopic.name.toLowerCase()
        )

        if (alreadyExists) {
            return res.status(400).json({ error: 'Тема вже існує' })
        }

        const updatedTopics = [...topics, { name: newTopic.name, count: newTopic.count ?? 0 }]

        await fs.writeFile(topicsFilePath, JSON.stringify(updatedTopics, null, 2), 'utf-8')

        res.status(201).json({ message: 'Тему додано', topic: newTopic })
    } catch (error) {
        console.error('Помилка при записі topics.json:', error)
        res.status(500).json({ error: 'Не вдалося зберегти тему' })
    }
})

export default router;