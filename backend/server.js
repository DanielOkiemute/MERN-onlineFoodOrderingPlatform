import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoutes.js'
import reservationRouter from './routes/reservationRoutes.js'





const app = express();


const PORT = process.env.PORT || 5000

connectDB();
connectCloudinary();


app.use(cors())
app.use(express.json())



app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/reservations',reservationRouter)


app.get('/',(req,res)=>{
    res.json({message:'Hello world'})
});




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT} `)
})



// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'


// dotenv.config()


//  const app = express();


//  const PORT = process.env.PORT || 5000

//   app.use(cors())
//   app.use(express.json())


//   app.get('/',(req,res)=>{
//     res.send("API Working")
//  })

//  console.log("PORT",process.env.PORT)

//  app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT} `)
//  })
