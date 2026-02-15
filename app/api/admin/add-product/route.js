import DBConnection from "../../../utils/config/db";
import {NextResponse} from 'next/server';
import { writeFile } from "fs/promises";
import path from "path";
import ProductModal from '../../../utils/models/Products'

export async function GET(){
await DBConnection();
const records = await ProductModal.find({

})
return NextResponse.json({data:records});
}

export async function POST(request){
    await DBConnection();

    const data = await request.formData();
    const title = data.get('title');
    const price = data.get('price');
    const offer = data.get('offer');
    const amen = data.get('amen');
    const desc = data.get('desc');
    const image = data.get('image');

    const bufferData = await image.arrayBuffer();
    const buffer = Buffer.from(bufferData);
    const imagePath = path.join(process.cwd() ,'public','uploads',image.name);

    try {
        await writeFile(imagePath ,buffer);
        const newProduct = new ProductModal({
            title : title,
            price : price,
            offer : offer,
            amen  : amen ,
            desc  : desc ,
            image : `/uploads/${image.name}`
        });
        await newProduct.save()
        return NextResponse.json({response : 'uploaded sucessfully' , success: true }, {status : 201});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false} ,{status : 500} );  
    }

}


