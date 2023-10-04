import mongoose from "mongoose";
import 'dotenv/config'

export async function connectDB() {
    try {
        await mongoose.connect(process.env.DB)
        console.log('Database connection established')
    } catch (error) {
        console.log('Error connecting ', error)
    }
}