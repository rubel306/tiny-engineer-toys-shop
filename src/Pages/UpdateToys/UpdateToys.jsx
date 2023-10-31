import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
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
  } = item;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const image = form.image.value;
    const updateToy = {
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
      image,
    };

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: " Successful ",
            text: "Your Update a toy Successfully",
          });
        }
        console.log("updated data", data);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-themeYellow my-8">
              Update: {name}
            </h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form
              onSubmit={handleUpdate}
              className="card-body grid grid-cols-2 gap-5"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Toy Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  defaultValue={user?.displayName}
                  type="text"
                  name="sellerName"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  disabled
                  defaultValue={user?.email}
                  type="email"
                  name="sellerEmail"
                  placeholder="Seller Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub Category</span>
                </label>
                <input
                  type="text"
                  name="subCategory"
                  defaultValue={subCategory}
                  placeholder="Sub Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="$10"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
                  defaultValue={quantity}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  placeholder="Product Description"
                  className="input input-bordered"
                  name="description"
                  defaultValue={description}
                  id=""
                  cols="30"
                  rows="30"
                ></textarea>
              </div>

              <div className="form-control mt-6  col-span-2">
                <button
                  type="submit"
                  className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]"
                >
                  Update A Toy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
