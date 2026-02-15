"use server"

import { signIn } from '../auth';
import DBConnection from '../utils/config/db'

export async function loginAction(loginDetails) {
   await DBConnection()
   console.log('entered the details ',loginDetails);

   try {
    const responce = await signIn('credentials' , {
        email : loginDetails.email,
        password : loginDetails.password,
        redirect : false
    })
    return {success : true}
    
   } catch (error) {
    throw new Error ('Invalid Credentials');
    
   }
}