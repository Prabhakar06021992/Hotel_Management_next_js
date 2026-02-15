import  React from 'react';
import Link from 'next/link'
import {signOut} from '../auth'

const AdminNavbar = () => {
    return(
    <header className="navSection">
      <div className="navLeft">
        <h2 className="logo">Holiday Resort</h2>
      </div>

      <nav className="navCenter">
        welcome : Admin
      </nav>

      <div className="navRight">

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
    )
}

export default AdminNavbar ;