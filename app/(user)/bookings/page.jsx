import DBConnection from '../../utils/config/db';
import UserModel from '../../utils/models/User';
import { auth } from '../../auth';

export default async function Page() {
  await DBConnection();
  const session = await auth();

  if (!session) {
    return <div>Please login</div>;
  }

  const user = await UserModel.findOne({
    email: session.user.email,
  })
    .populate("bookings")
    .lean();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>My Booking List</h2>
      {user.bookings.length === 0 ? (
        <p>No bookings found</p>
      ) : (
        user.bookings.map((item) => (
          <div key={item._id}>{item.productName}</div>
        ))
      )}
    </div>
  );
}







/* import BookingList from '../../components/BookingList';
import { auth } from '../../auth';

export default async function Page() {
  const session = await auth();

  if (!session) {
    return <div>Please login</div>;
  }

  const userId = session.user._id;

  return <BookingList userId={userId} />;
} */




/* "use client"
import React, { useEffect, useState } from "react";
import { auth } from "../../auth";

const BookingList =  () => {
    const [list , setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error ,setError] = useState('');

    const bookingListHandler = async () => {
        setLoading(true);
        try {
        const session = await auth();
        if(!session){
            setError("Please login");
            setLoading(false);
            return ;
            }
        const userId = session.user.id;

        const  response = await fetch(`http://localhost:3000/api/users/${userId}`);
        const  result = await response.json();
        setList(result.data.bookings || []);
        useEffect(()=> {
            bookingListHandler();
        },[]);

         console.log('booking list : ',list);
        }catch (error) {
            setError(error.message)
        }finally {
            setLoading(false);
        } 
    }

    if (loading) return <div>Loading bookings...</div>;
    if (error) return <div>{error}</div>;

    return(
        
           <div>
      <h2>My Booking List</h2>

      {list.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {list.map((booking) => (
            <li key={booking._id}>
              <p><strong>ID:</strong> {booking._id}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
    )

}
export default BookingList ;
 */