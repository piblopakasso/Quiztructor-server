import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/questions', async (req, res) => {
    try {
        const data = await fs.readFile('./data/questions.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Помилка читання файлу' });
    }
});

app.get('/', (req, res) => {
    res.send('Сервер працює!');
});

app.listen(PORT, () => {
    console.log('Сервер запущено на http://localhost:3000');
});