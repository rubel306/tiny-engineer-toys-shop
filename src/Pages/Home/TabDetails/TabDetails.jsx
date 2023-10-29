import React from "react";

const TabDetails = ({ product }) => {
  const { name, price, picture, rating } = product;
  return (
    <div className="my-4 text-center">
      <img className="w-80 h-80" src={picture} alt="" />
      <h2 className="font-semibold text-2xl my-2">{name}</h2>
      <p className="text-themeYellow font-semibold my-2 font-lg">${price}</p>
      <p>{rating}</p>
      <button className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
        Buy Now
      </button>
    </div>
  );
};

export default TabDetails;
