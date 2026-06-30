import jwt from 'jsonwebtoken'

export const adminLogin = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(password+email,process.env.JWT_SECRET)
            res.json({success:true,data:token,message:"login successfull"})
            console.log("token",token)
        }else{
            res.json({success:false,message:"Incorrect Credentials"})
        }
    } catch (err) {
        console.log(err)
        res.json({success:false,message:err})
        
    }
}