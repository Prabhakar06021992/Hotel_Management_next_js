"use server"

import {auth} from '../auth'

import DBConnection from "../utils/config/db";
import UserModal from '../utils/models/User';
import BookingModal from '../utils/models/Bookings'
import { NextResponse } from 'next/server';

export  async function bookingAction(bookingDetails) {

    const session = await auth();

    console.log('email check :', session.email);

    try {

          await DBConnection();
    console.log('server booking details are',bookingDetails);

    const user = await UserModal.findOne({email : session.email})

    if(!user){
        return {success: false , message : 'There is no User'}
    }

    const userId = user._id.toString();

        const userBookingDetails = await BookingModal.create({

            startDate : bookingDetails.selectDates.startDate,
            endDate : bookingDetails.selectDates.endDate,
            productName: bookingDetails.details.title,
            price : bookingDetails.details.price,
            offer : bookingDetails.details.offer,
            image : bookingDetails.details.image,        

        })

        await UserModal.findByIdAndUpdate(
            userId, {$push : {bookings : userBookingDetails._id }},
            {new : true}
    )  
    return {success : true}
        
    } catch (error) {
         console.log(error);
        return {success: failed , message : 'Booking was failed'}
        
    }

  
}

