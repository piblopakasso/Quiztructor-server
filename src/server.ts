import express from 'express';
import cors from 'cors';

import questionsRoutes from './routes/questions';

const app = express();
const PORT = 3000;

app.use(cors());

app.use('/questions', questionsRoutes);

app.get('/', (req, res) => {
    res.send('Сервер працює!');
});

app.listen(PORT, () => {
    console.log('Сервер запущено на http://localhost:3000');
});