import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fileupload from 'express-fileupload'
import helmet from 'helmet'
import { connectDB } from './src/config/db.js'
import 'dotenv/config'


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false
}))
app.use(fileupload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande"
}))

import { routerBook } from './src/routes/book.routes.js'
app.use('/api', routerBook)


app.listen(port, () => {
    connectDB();
    console.log('listening on port ', port)
})