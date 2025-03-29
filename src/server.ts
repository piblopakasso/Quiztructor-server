import express from 'express';
import { questionsData } from './questionsData';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Сервер працює!');
});

app.get('/questions', (req, res) => {
    res.json(questionsData());
});

app.listen(PORT, () => {
    console.log('Сервер запущено на http://localhost:3000');
});