import DBConnection from '../../../utils/config/db';
import { NextResponse } from 'next/server';
import UserModal from '../../../utils/models/User';

export async function GET(request , {params}){
    await DBConnection();
    const {id} =  params;
    try {
        if(!id){
            return NextResponse.json({success: false , message : 'There is no User'} , {status : 404})
        }
        const user = await UserModal.findById(id).populate('bookings')
        return NextResponse.json({success: true , data:user} , {status : 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({success: false , message :'Id is missing'}, {status : 500})       
    }

}