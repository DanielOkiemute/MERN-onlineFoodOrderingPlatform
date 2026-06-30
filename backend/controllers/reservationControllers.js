import reservationModel from "../models/reservationModel.js";



const createReservation = async (req,res) => {
    try {
        
        const {name,email,time, guests,date,phone} = req.body;
        console.log("req.body",name,email,time,guests,date,phone)
        if(!name || !email ||!time ||!guests || !date || !phone) {
            return res.json({success:false,message:"All fields are required"})
        }

        const newReservation = new reservationModel({name,time,guests,date,phone,email})
        await newReservation.save()
        res.json({success:true,message:"Reservation created successfully",newReservation})
    } catch (error) {
        console.log(error)
        res.json({message:error.message})
        
    }
    

}
const getAllReservations = async (req,res) => {
    try {
        const reservations = await reservationModel.find();
        res.json({success:true,message:"Reservations fetched successfully",reservations})
        console.log("Reservations",reservations)
    } catch (error) {
         console.log(error)
        res.json({message:error.message})
        
    }
    
}



const deleteReservation = async (req,res) => {
    try {
        const {id} = req.params;
        await reservationModel.findByIdAndDelete(id);
        res.json({success:true,message:"reservation deleted successfully"})
    } catch (error) {
        console.log(error)
        res.json({message:error.message})
    }
    
}


export {createReservation,getAllReservations,deleteReservation}