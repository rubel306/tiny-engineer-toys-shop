import React from "react";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center text-3xl font-bold my-8 text-themeYellow">
        Shop by category
      </h2>
      <CategoryTab></CategoryTab>
    </div>
  );
};

export default Home;
