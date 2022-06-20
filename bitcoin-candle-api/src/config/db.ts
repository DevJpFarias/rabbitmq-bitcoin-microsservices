import { config } from 'dotenv'
import { connect } from 'mongoose'

config()

export const connectToMongoDB = async () => {
  await connect(process.env.MONGODB_CONNECTION_URL)
}