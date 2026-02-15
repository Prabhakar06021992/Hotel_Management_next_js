import React from 'react';
import {auth} from '../auth'
import { redirect } from 'next/navigation';
import AdminNavbar from '../components/AdminNavbar'
import AddProduct from '../components/AddProduct'

const AdminPage = async() => {

    const session = await auth();

    if(!session){
        redirect("/login")
    }
    return(
        <>
        <AdminNavbar/>
        <h1>Admin Page</h1>
        <AddProduct/>
        </>
    )
}
export default AdminPage;