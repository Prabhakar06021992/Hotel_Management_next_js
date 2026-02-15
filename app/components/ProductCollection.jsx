'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './styles/ProductCollection.css';

const ProductCollection = () => {
  const [collections, setCollections] = useState([]);

  const collectionHandler = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/add-product');
      const newData = await response.json();
      setCollections(newData.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    collectionHandler();
  }, []);

  return (
    <div className="product-grid">
      {collections.map((item) => {
        const { _id, title, price, offer, amen, desc, image } = item;

        return (
          <div className="product-card" key={_id}>
            <h2 className="product-title">{title}</h2>

            <div className="image-box">
              <img src={image} alt={title} />
            </div>

            <div className="price-offer">
              <span>₹{price}</span>
              <span>{offer}% OFF</span>
            </div>

            <div className="amen">{amen}</div>
            <div className="desc">{desc}</div>

            <div className="btn-wrapper">
              <Link href={`/details/${_id}`}>
                <button className="details-btn">Details</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCollection;



/* 'use client'
import React, { useEffect, useState } from 'react';


const ProductCollection =() => {
    const [collections ,setCollections] = useState("");

    const collectionHandler = async () => {
        const response = await fetch(`http://localhost:3000/api/admin/add-product`);
        const newData = await response.json();
        console.log(" Product Data" , newData);

        setCollections(newData.data);

    }

    useEffect(()=> {
        collectionHandler();
    },[])

    return(
        <>

        <div>
            {collections && collections.map((item) => {
                const {_id ,title,price ,offer ,amen,desc,image} =item;
                return(   
                    <div key= {_id}>
                        <h1>{title}</h1>
                        <h3>Price = {price}/-</h3>
                        <h3>offer = {offer}%</h3>
                        <img src={image} alt={title}/>
                        <h4>amenities are {amen}</h4>
                        <p>{desc}</p>
                                                
                    </div>
                )
            })}
        </div>

        </>
    )
}
export default ProductCollection; */