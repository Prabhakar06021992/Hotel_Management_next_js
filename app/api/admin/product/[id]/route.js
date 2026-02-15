import DBConnection from '../../../../utils/config/db';
import {NextResponse} from 'next/server'
import ProductModal from '../../../../utils/models/Products'

export async function GET(request , {params}){
    await DBConnection();
    const {id} = await params ;

    try {
        if(!id){
            return NextResponse.json({success: false , message : 'no product is there '} , {status : 404})
        }
        const product = await ProductModal.findById(id)
        return NextResponse.json({success: true , data:product} ,{status :200} )
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false , message : 'product is missing'} ,{status :500})
        
    }
}