import React from "react";
import Swal from "sweetalert2";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged === true) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            console.log(data);
          });
      }
    });
  };
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
        <button
          onClick={() => handleDelete(_id)}
          className="rounded-lg text-white px-8 py-3 font-semibold bg-[#d31900] hover:bg-[#000]"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
