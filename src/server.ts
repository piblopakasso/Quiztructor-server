import express from 'express'
import cors from 'cors'

import questionsRoutes from './routes/questions'
import topicsRoutes from './routes/topics'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/questions', questionsRoutes)
app.use('/topics', topicsRoutes)

app.get('/', (req, res) => {
    res.send('Сервер працює!')
})

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`)
})