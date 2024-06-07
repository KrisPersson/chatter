import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL as string)
const database = mongoose.connection
database.on('error', (error) => console.log(error))
database.once('connected', () => console.log('Database connection established'))