import products from "../models/productModels.js";
import {v2 as cloudinary} from 'cloudinary'



const addProduct = async (req,res) => {
    try {
        const {name,category,price,description} = req.body;
        const image = req.file;

     let imageurl=""

    if (image) {
        let result = await cloudinary.uploader.upload(image.path,{resource_type})
        imageurl = result.secure_url
        console.log(result.secure_url)
        
    } else {
        imageurl= "https://via.placeholder.com/150"
        
    }

    const productData =  {
        name,description,price:Number(price),
        imageurl,category,date:Date.now()
    }

    console.log(productData)

    const newProduct = new products(productData)
    console.log(newProduct)

    await newProduct.save()

    console.log("2")

    res.json({success:true,message:"Product Added Successfully"})
    console.log("3")

    } catch (error) {
        res.json({succes:false,message:error.meaage})
    }
    
}



const listProducts = async (req,res) => {
    try {
       const allProducts = await products.find({}) 
       res.json({success:true,message:"Products listed successfully",products:allProducts})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}



const singleProduct = async (req,res) => {
    try {
        const product = await products.findById(req.params.id)
        res.json({success:true,message:"Product found successfully",product})
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }
    
}



const removeProduct = async (req,res) => {
    
}


export {addProduct,listProducts,removeProduct,singleProduct}