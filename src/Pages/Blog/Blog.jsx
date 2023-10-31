import React from "react";
import blog1 from "../../assets/truck.jpg";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="my-4">
      <h2 className="text-center text-3xl font-bold my-8 text-themeYellow">
        Our Blog
      </h2>
      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
        <div className="my-4">
          <img className="w-80 h-80" src={blog1} alt="" />
          <h2 className="font-semibold text-2xl my-2">What is Express</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur reiciendis debitis atque magnam eligendi laboriosam a.
            Quia quisquam qui exercitationem facilis hic vero error in, aliquid
            corporis ut dicta excepturi.
          </p>
          <Link className="rounded-lg text-white px-8 py-3 font-semibold bg-themeYellow hover:bg-[#000]">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
