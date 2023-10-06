import { Router } from "express"
import { ctrlAddbook } from "../controllers/book.controllers.js"

const routerBook = Router()

routerBook.post('/book', ctrlAddbook)

export { routerBook }