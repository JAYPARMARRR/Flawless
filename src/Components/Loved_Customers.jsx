import React from "react";

import IMG1 from "../assets/pro_1.jpg";
import IMG2 from "../assets/pro_7.jpg";
import IMG3 from "../assets/pro_4.jpg";
import IMG4 from "../assets/pro_9.jpg";

const Loved_Customers = () => {
  return (
    <>
      <div className="  pt-24 flex  gap-8 flex-wrap  ">
        <div className=" text-center w-full ">
          <h1 className="text-4xl ">Most Loved by the Customers</h1>
          <p className="mt-2 text-slate-700">
            Mauris lacus nunc pellentesque eget bibendum vitae scelerisque
          </p>
        </div>
        {/* ////////////////////////////// */}

        <div className="gap-16 flex justify-center items-center  w-full">

          <div className=" h-[66vh] w-[35vh] mt-9 relative    ">
            <img src={IMG1} className=" h-[62vh] max-w-[125%] cursor-pointer  " />

            <p className="text-slate-400 text-[14px] mt-1">Body lotion</p>
            <p className="teexxt-[16px] text-slate-900 mt-1">Cream to Foam Lotion</p>
            <p className="text-[19px]">☆☆☆☆☆</p>
            <p className="text-[16px] font-bold">$18.90</p>
          </div>

          {/* /////// */}
          <div className=" h-[66vh] w-[35vh] mt-9 relative ">

            <img src={IMG2} className=" h-[62vh] max-w-[125%]  cursor-pointer " />

            <p className="text-slate-400 text-[14px] mt-1">Moisturizer</p>
            <p className="text-[16px] text-slate-900 mt-1">Antiaging Skin Oil</p>
            <p className="text-[19px]">☆☆☆☆☆</p>
            <p className="text-[16px] font-bold">$44.90</p>
          </div>
          {/* /////// */}
          <div className=" h-[66vh] w-[35vh] mt-9 relative">
            <img src={IMG3} className=" h-[62vh] max-w-[125%]  cursor-pointer " />

            <p className="text-slate-400 text-[14px] mt-1">Bundles</p>
            <p className="text-[16px] text-slate-900 mt-1">
              Calm Hydrating Moisturizer
            </p>
            <p className="text-[19px]">☆☆☆☆☆</p>
            <p className="text-[16px] font-bold">$29.90 - $34.90</p>
          </div>
          {/* /////// */}
          <div className=" h-[66vh] w-[35vh] mt-9 relative">
            <img src={IMG4} className=" h-[62vh] max-w-[125%]  cursor-pointer " />

            <p className="text-slate-400 text-[14px] mt-1">Sunscreens</p>
            <p className="text-[16px] text-slate-900 mt-1">Complex Sunscreen Balm</p>
            <p className="text-[19px]">☆☆☆☆☆</p>
            <p className="text-[16px] font-bold">$22.50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loved_Customers;
