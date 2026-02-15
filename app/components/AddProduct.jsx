"use client";

import React, { useState } from "react";
import "../components/styles/addProduct.css"; // adjust path if needed


const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [amen, setAmen] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handlerforProducts = async (e) => {
    e.preventDefault();
    const productDetails = {title,price,offer,amen,desc,image};
    console.log(productDetails);

    const data = new FormData();
    data.append('title' ,title);
    data.append('price' , price);
    data.append('offer', offer);
    data.append('amen', amen);
    data.append('desc', desc);
    data.append('image', image);

    try {
      const response = await fetch(`http://localhost:3000/api/admin/add-product`,{
        method:'POST',
        body:data
      })
      const result = await response.json();
      if(result.success){
        alert('Record added successfully');
      setTitle("");
      setPrice("");
      setOffer("");
      setAmen("");
      setDesc("");
      setImage("");
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="addProductContainer">
      <form className="addProductForm" onSubmit={handlerforProducts}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Offer</label>
        <input
          type="text"
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />

        <label>Amenities</label>
        <input
          type="text"
          value={amen}
          onChange={(e) => setAmen(e.target.value)}
        />

        <label>Description</label>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label>Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
