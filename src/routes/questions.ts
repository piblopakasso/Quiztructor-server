import { Router } from 'express';

import {readJSONFile} from "../utils/readJSONFile";

const router = Router();

router.get('/', async (_req, res) => {
    try {
        const data = await readJSONFile('./data/questions.json');
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Помилка читання файлу запитань' });
    }
});

export default router;