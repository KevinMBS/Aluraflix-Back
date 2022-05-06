import express from "express"
import routes from "./routes/index.js"
import MongoDB from "./config/db/mongoDB.js"

const db = new MongoDB('mongodb+srv://Kevin_MBS:123@aluraflix.hcj3y.mongodb.net/Aluraflix')
const dbConnection = db.connect()
const app = express()

app.use(express.json())
routes(app)

export default app