import { Router } from 'express';
import path from 'path'
import {readJSONFile} from "../utils/readJSONFile";

const router = Router();

const questionsFilePath = path.join(process.cwd(), 'data', 'questions.json')

type Question = {
    id: number
    mainText: string
    additionalText?: string
    topics: string[]
    used: boolean
    reused: boolean
    mechanics: string[]
    quizzes?: string[]
}

router.get('/', async (_req, res) => {
    try {
        const data = await readJSONFile<Question[]>(questionsFilePath);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Помилка читання файлу запитань' });
    }
});

export default router;