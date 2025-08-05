import express from "express"
import dotenv, { config } from 'dotenv'
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import bodyParser from "body-parser"

const app = express()
dotenv.config({})


app.use(express.json());
app.use(cors({
    origin: "*", 
    credentials: true
}));




app.use("/api/users",userRouter) 

export {app};

