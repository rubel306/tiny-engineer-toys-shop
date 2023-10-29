import React from "react";
import Rating from "react-rating";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TabDetails = ({ product }) => {
  const { _id, name, price, picture, rating } = product;
  return (
    <div className="my-4 text-center">
      <img className="w-80 h-80" src={picture} alt="" />
      <h2 className="font-semibold text-2xl my-2">{name}</h2>
      <p className="text-themeYellow font-semibold my-2 font-lg">${price}</p>
      <Rating
        className="text-themeYellow"
        placeholderRating={rating}
        emptySymbol={<FaStarHalfAlt className="bg-gray"></FaStarHalfAlt>}
        placeholderSymbol={<FaStar></FaStar>}
        fullSymbol={<FaStar></FaStar>}
      />
      <p className="mb-8">{rating}</p>
      <Link
        className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]"
        to={`toys/${_id}`}
      >
        Buy Now
      </Link>
    </div>
  );
};

export default TabDetails;
