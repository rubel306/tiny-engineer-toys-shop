import React from "react";

const TableRow = ({ product }) => {
  const {
    name,
    price,
    _id,
    quantity,
    rating,
    sellerName,
    sellerEmail,
    image,
    subCategory,
    description,
  } = product;
  console.log("table row", product);
  return (
    <tr>
      <td>{name}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{subCategory}</td>
      <td>{description}</td>
      <td>
        <button className="rounded-lg text-white px-8 py-3 font-semibold bg-[#7ab317] hover:bg-[#000] mb-4">
          Edit
        </button>
        <button className="rounded-lg text-white px-8 py-3 font-semibold bg-[#d31900] hover:bg-[#000]">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
