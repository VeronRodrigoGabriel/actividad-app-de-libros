import { Schema, model, Types } from "mongoose";

const SchemaBook = Schema(
    {
        name_libro: {
            type: String,
            require: true
        },
        Author: {
            type: Types.ObjectId.author,
            ref: 'author'
        },
        genre: {
            type: {
                type: String,
                require: true
            }
        }
    }
)

export const bookModel = model('Book', SchemaBook)


//services

async function Addbook(book) {

}