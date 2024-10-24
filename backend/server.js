import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRooute.js';
// import usercontroller from "./controllers"
// import { loginUser, registerUser, adminLogin } from './controllers/usercontroller.js'; 



// app config 

const app=express();
const port=process.env.PORT || 4000

// middlewares 
app.use(express.json())
app.use(cors())
connectDB()
connectCloudinary()


// api endpoints 

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)

app.get('/',(req,res)=>{
    res.send("api is working")
})

app.listen(port,()=>console.log("server startedd on port: "+port)
)