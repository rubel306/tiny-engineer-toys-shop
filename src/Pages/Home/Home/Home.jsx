import React from "react";
import Banner from "../Banner/Banner";
import CategoryTab from "../CategoryTab/CategoryTab";
import saleBanner from "../../../assets/lookbook-1.jpg";
import specialCollectionImg1 from "../../../assets/truck.jpg";
import specialCollectionImg2 from "../../../assets/pickup.jpg";
import age0Img from "../../../assets/0.jpg";
import age1Img from "../../../assets/1.jpg";
import age4Img from "../../../assets/4.jpg";
import age7Img from "../../../assets/7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2
        data-aos="fade-in"
        className="text-center text-3xl font-bold my-8 text-themeYellow"
      >
        Shop by category
      </h2>
      <CategoryTab></CategoryTab>
      {/* sale banner  */}
      <div
        className="py-24 ps-4 my-4"
        style={{
          backgroundImage: `url(${saleBanner})`,
          backgroundSize: "cover",
        }}
      >
        <h3 data-aos="fade-right" className="text-3xl mb-4 font-bold">
          Sale 30%
        </h3>
        <h2
          data-aos="fade-up"
          className="font-bold text-lg text-themeYellow mb-4"
        >
          Chirstmas Sale Ongoing Hurry Up !!{" "}
        </h2>
        <button
          data-aos="fade-up"
          className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]"
        >
          Shop Now
        </button>
      </div>

      {/* our special collection   */}
      <div className="flex w-full gap-4">
        <div className="my-4">
          <img data-aos="flip-left" src={specialCollectionImg1} alt="" />
          <h2 className="text-2xl mt-2 mb-2 font-bold text-black">
            Construction tractors
          </h2>
          <button className="rounded-lg text-white px-8 py-2 font-semibold bg-themeYellow hover:bg-[#000]">
            Buy Now
          </button>
        </div>
        <div className="my-4">
          <img data-aos="flip-left" src={specialCollectionImg2} alt="" />
          <h2 className="text-2xl mt-2 mb-2 font-bold text-block">
            Construction site Pickup
          </h2>
          <button className="rounded-lg text-white px-8 py-2 font-semibold bg-themeYellow hover:bg-[#000]">
            Buy Now
          </button>
        </div>
      </div>

      {/* shop by age  */}
      <div>
        <h2 className="text-center text-3xl font-bold mb-2 mt-8 text-themeYellow">
          Shop by Age
        </h2>
        <div className="flex gap-4">
          <div className="my-4">
            <img data-aos="flip-left" src={age0Img} alt="" />
            <h2 className="text-xl text-center mt-2 mb-2 font-bold text-black">
              0 - 12 Months
            </h2>
          </div>
          <div className="my-4">
            <img data-aos="flip-left" src={age1Img} alt="" />
            <h2 className="text-xl text-center mt-2 mb-2 font-bold text-black">
              1 - 3 Years
            </h2>
          </div>
          <div className="my-4">
            <img data-aos="flip-left" src={age4Img} alt="" />
            <h2 className="text-xl text-center mt-2 mb-2 font-bold text-black">
              4 - 6 Years
            </h2>
          </div>
          <div className="my-4">
            <img data-aos="flip-left" src={age7Img} alt="" />
            <h2 className="text-xl text-center mt-2 mb-2 font-bold text-black">
              7 - 11 Years
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
