"use client"

import React, { useState } from 'react';
import './RegisterForm.css';
import { loginAction } from '../serverActions/loginAction';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UserLogin = () => {
    const [email ,setEmail ] = useState('');
    const [password ,setPassword] = useState('');
    const [error , setError] = useState('');
    const router = useRouter();

    const loginHandler = async (e) => {
        e.preventDefault();
        const loginDetails = {email , password}
        console.log('login Details are',loginDetails );
        try {
           const response = await loginAction(loginDetails);
           if(response.success){
              router.push("/")
           }else {
            setError(response.message || 'login Failed');
           }
            
        } catch (error) {
            console.log(error);  
            setError(error.message || 'login Failed'); 
        }
    }  
    return (
        <div className="form-container">
            <form onSubmit={loginHandler} className="register-form">
                {error && <p style={{color: 'red'}}>{error}</p>}
                <h3>Email</h3>
                <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)} />

                <h3>Password</h3>
                <input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} />

                <button type='submit'>Login</button>
                <br/><br/>
                <Link href={"/register"}> If not registered ?Register</Link>
            </form>
        </div>
    )
}

export default UserLogin;