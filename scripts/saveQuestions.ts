import fs from 'fs';
import path from 'path';
import { questionsData } from '../src/questionsData';

const filePath = path.join(__dirname, '../data/questions.json');

fs.writeFileSync(filePath, JSON.stringify(questionsData(), null, 2), 'utf-8');

console.log('Файл questions.json створено!');     // npx ts-node scripts/saveQuestions.ts для запуску