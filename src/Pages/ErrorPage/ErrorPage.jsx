import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="w-full "
        src="https://media3.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt=""
      />
      <h2 className="text-center text-5xl my-40 text-red-500">
        <Link to="/">Back to Home</Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
