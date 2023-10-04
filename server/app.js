import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { connectDB } from './src/config/db.js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000


app.use(morgan('dev'))
app.use(cors())
app.use(helmet({
    contentSecurityPolicy: false
}))




app.listen(port, () => {
    connectDB();
    console.log('listening on port ', port)
})