import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

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
    <div>
      {data.map((product) => (
        <h2 className="text-2xl">{product.name}</h2>
      ))}
    </div>
  );
};

export default MyToys;
