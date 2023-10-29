import React, { useEffect, useState } from "react";
import TabDetails from "../Home/TabDetails/TabDetails";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cattoys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="text-center my-8 text-2xl font-bold text-themeYellow uppercase">
        All Toys
      </h2>
      <div className="grid grid-cols-3 gap-4 ">
        {products.map((product) => (
          <TabDetails key={product._id} product={product}></TabDetails>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
