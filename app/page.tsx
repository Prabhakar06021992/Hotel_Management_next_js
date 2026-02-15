import React from 'react';
import DBConnection from './utils/config/db' 
import {auth} from './auth.js'
import { redirect } from 'next/navigation';
import UserNavigation from './components/UserNavigation'
import AdminPage from './admin/page';
import ProdutColletion from './components/ProductCollection'

const Home = async() => {
  const session = await auth();

  await DBConnection();
  if(!session){
    redirect("/login");
  }

  const userName = session.userName;

  //console.log('user check' , username);

  console.log('role check' , session.role);



  return (
    <div >
      {session.role === 'user' && (
        <>
        <UserNavigation userName = {userName}/>
          <main style={{ padding: "20px" }}>
          <h4>Hi welcome to the user {userName} {session.email}</h4>
          <ProdutColletion/>
          </main>
        </>

      ) }
      { session.role === 'admin' && <AdminPage/> 

      }
      
    </div>
  );
}
export default  Home;
