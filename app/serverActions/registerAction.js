"use server"
import DBConnection from '../utils/config/db';
import UserModal from '../utils/models/User';

export async function registerAction(registerDetails) {
    await DBConnection()
    console.log('register Action Details' , registerDetails);

    try {
        await UserModal.create({
            userName : registerDetails.userName,
            email : registerDetails.email,
            password : registerDetails.password
        })
        return {success : true}
    } catch (error) {
        console.log(error);      
    }
}