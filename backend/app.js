import express from 'express'
import payment from './routes/productRoutes.js'

const app = express()

app.use(express.json())//middleware to send inn postman
app.use(express.urlencoded({ extended: true }))//incoming request bodies to pass

app.use("/api/v1", payment)

export default app