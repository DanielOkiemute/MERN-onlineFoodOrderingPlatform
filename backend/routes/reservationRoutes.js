import express from 'express'
import { createReservation ,getAllReservations,deleteReservation} from '../controllers/reservationControllers.js'


const reservationRouter = express.Router()

reservationRouter.post('/create',createReservation);
reservationRouter.get('/get',getAllReservations);
reservationRouter.delete('/delete/:id',deleteReservation);



export default reservationRouter
