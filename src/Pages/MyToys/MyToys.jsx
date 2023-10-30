import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import TabDetails from "../Home/TabDetails/TabDetails";
import TableRow from "./TableRow";

const MyToys = () => {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user) {
      setLoading(true);
    }
    fetch(`http://localhost:5000/products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>subCategory</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <TableRow key={product._id} product={product}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
