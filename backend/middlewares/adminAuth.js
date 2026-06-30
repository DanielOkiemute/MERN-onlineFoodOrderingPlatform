import jwt from 'jsonwebtoken'

const adminAuth =async (req,res,next)=>{
    try {
        const {token} = req.headers;
        console.log("token",token)
        if(!token) 
            {return res.json({success:false,message:"Unauthorized access"})}
        const token_decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(token_decoded)
        if(token_decoded !== process.env.ADMIN_PASSWORD+process.env.ADMIN_EMAIL ){
           return res.json({success:false,message:"User not authorized"})
        }
        next();
       
    } catch (error) {
        console.log(error.message)
        res.json({succee:false,message:error.meaage})
    }

}

export default adminAuth