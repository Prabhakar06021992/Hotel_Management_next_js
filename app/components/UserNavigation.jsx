
import React from 'react';
import Link from 'next/link'
import {signOut} from '../auth'

const UserNavigation = () => {
  return (
    <header className="navSection">
      <div className="navLeft">
        <h2 className="logo">Holiday Resort</h2>
      </div>

      <nav className="navCenter">
        <Link href="">
          Bookings
        </Link>
      </nav>

      <div className="navRight">
        <span className="contact">📞 123 456 789</span>

         <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button type="submit" className="logoutBtn">
            Logout
          </button>
        </form>
      </div>
    </header>
  );
};

export default UserNavigation;

 /* const UserNavigation = () => {
    return(
        <div className='navSection'>
            <div className='title'>
                <h2>Holiday Resort</h2>
            </div>
        
            <div className='contact'>
                call now : 123 456 789
            </div>
            <Link className='link'> 
            <div className='bookings'>
                Bookings
            </div>
            </Link>
            <Link className='link'> 
            <div className='logout'>
                Logout
            </div>
            </Link> 
        </div>
      
    )
}
export default UserNavigation ; */