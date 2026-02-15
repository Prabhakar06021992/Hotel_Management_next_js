"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./ProductDetails.css";
import CalenderComponent from "../../../components/CalernderComponent";
import { bookingAction } from "../../../serverActions/bookingAction";

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [details, setDetails] = useState(null);
  const [selectDates ,setSelectDates] = useState(null);

  const DynamicDetailsHandler = async () => {
    const response = await fetch(
      `http://localhost:3000/api/admin/product/${id}`
    );
    const newData = await response.json();
    setDetails(newData.data);
  };

  useEffect(() => {
     DynamicDetailsHandler();
  }, []);

  if (!details) return <h2 className="loading">Loading...</h2>;

  const { title, price, offer, amen, desc, image } = details;

  const bookingHandler = async() => {
    if(!selectDates){
      alert('Please select the booking Dates');
      return
    }
       const bookingDetails = {details ,selectDates }
    try {
      const response = await bookingAction(bookingDetails)
      if(response.success){
        alert('Booking successful');
      }
      
    } catch (error) {
      console.log(error)
      return {success:failed , message: 'There is an error'}
      
    }
  }
   
  const selectDatesHandler = (dates) => {
    setSelectDates(dates);
    console.log('dates are showing :',dates );

  }

  return (
    <>

    <div className="details-page">
      <div className="details-card">
        <h1 className="details-title">{title}</h1>

        <div className="details-content">
        <div className="details-image">
          <img src={image} alt={title} />
        </div>

        <div className="details-info">
          <p><strong>Price:</strong> ₹{price}</p>
          <p><strong>Offer:</strong> {offer}% OFF</p>
          <p><strong>Amenities:</strong> {amen}</p>
          <p className="desc">{desc}</p>
          <CalenderComponent onDateSelect={selectDatesHandler}/>
        </div>
      </div>
        <div className="details-buttons">
          <button className="book-btn" onClick={bookingHandler}>BOOK NOW</button>
          <button className="back-btn" onClick={() => router.back()}>
            BACK
          </button>
        </div>
      </div>
    </div>
    
</>
  );
};

export default ProductDetails;


/* "use client"

import React, { useEffect, useState } from 'react';
import {useParams} from 'next/navigation'

const ProductDetails = () => {

    const params = useParams();
    const [details , setDetails] = useState([]);

    const {id} = params ;
    console.log('dynamic page' , id)

    const DynamicDetailsHandler = async() => {
        const response  = await fetch(`http://localhost:3000/api/admin/product/${id}`);
        const newData = await response.json();

        setDetails(newData.data);

    }

    useEffect(()=> {
        DynamicDetailsHandler();
    },[id])


    const {_id , title, price, offers ,amen,desc,image} = details;

    return(
        <div>
            
                            <h1>{title}</h1>
                            <img src={image} alt={title}/>
                            <h4>Price {price}</h4>
                            <h4>Seasonal Offer {offers}</h4>
                            <h4>amenities {amen}</h4>
                            <p>description {desc}</p>

                            <button>BOOK NOW</button> <button>BACK</button>     

             
        </div>
    )
    
}

export default ProductDetails; */