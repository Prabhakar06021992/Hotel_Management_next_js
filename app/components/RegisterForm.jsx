'use client'

import React, { useState } from 'react';
import './RegisterForm.css';
import { registerAction } from '../serverActions/registerAction';
import Link from 'next/link';
import {useRouter} from 'next/navigation'

const RegisterForm = () => {
    const [userName ,setUserName] = useState('');
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const router = useRouter();

    const handlingRegister = async (e) => {
        e.preventDefault();
        const userRegistationDetails  = {userName,email,password}
        console.log(userRegistationDetails);

        try {
           const responce = await registerAction(userRegistationDetails);
           if(responce.success){
            alert('registered user succesfully');
            router.push('/login')
           }
           
            
        } catch (error) {
            console.error(error);    
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handlingRegister} className="register-form">
                <h3>User Name</h3>
                <input type='text' name='userName' onChange={(e)=> setUserName(e.target.value)} />

                <h3>Email</h3>
                <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)} />

                <h3>Password</h3>
                <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />

                <button type='submit'>Register</button>
                <br/><br/>
                <Link href={"/login"}> If Already resgistered ?Login</Link>
            </form>
        </div>
    );
}

export default RegisterForm;

