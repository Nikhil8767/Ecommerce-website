import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


// app config 

const app=express();
const port=process.env.PORT || 4000

// middlewares 
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()


// api endpoints 

app.get('/',(req,res)=>{
    res.send("api is working")
})

app.listen(port,()=>console.log("server startedd on port: "+port)
)