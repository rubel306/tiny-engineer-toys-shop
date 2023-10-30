import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();
  const {
    name,
    price,
    picture,
    description,
    quantity,
    rating,
    seller,
    subCategory,
  } = product;
  console.log(product);
  return (
    <div className="w-full flex">
      <div className="w-8/12, ">
        <img className="w-2/3" src={picture} alt="" />
      </div>
      <div className="w-4/12">
        <h2 className="font-bold text-2xl my-8">{name}</h2>
        <h2 className="text-themeYellow text-2xl font-bold mb-4">${price}</h2>
        <p>
          <b>Quantity Available: </b>
          {quantity}
        </p>
        <p>
          <b>Overall Rating: </b>
          {rating}
        </p>
        <p>
          <b>Seller Info:</b> <br />
          <b> Name: </b>
          {seller.name} <br />
          <b> Email: </b>
          {seller.email}
        </p>
        <p>
          <b>Category: </b> {subCategory}
        </p>
        <p className="my-8">{description}</p>
        <Link className="mb-8 block rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000] text-center">
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default Product;
