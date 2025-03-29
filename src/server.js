"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const questionsData_1 = require("./questionsData");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Сервер працює!');
});
app.get('/questions', (req, res) => {
    res.json(questionsData_1.questionsData);
});
console.log('Готуємо сервер до запуску...');
app.listen(PORT, () => {
    console.log('Сервер запущено на http://localhost:3000');
});
