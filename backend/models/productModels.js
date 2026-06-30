import mongoose from "mongoose";



const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String},
    category:{type:String,required:true},
    date:{type:Number,required:true},
})


const products = mongoose.models.products || mongoose.model('products',productSchema);

export default products;