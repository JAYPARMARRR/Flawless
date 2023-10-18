import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footar_main = () => {
  return (
    <>
    <div className="border-solid border-b-2 border-y-slate-200 ">

    
    <div className="h-64 mt-28 ">
      <h1 className="text-2xl text-center font-light">Flawless</h1>
      <div className=" justify-center flex items-center ">
        <ul className=" flex text-black p-6 cursor-pointer gap-8">
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink ">
            Home
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
            Shop
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
            About
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
            Contact
          </li>
        </ul>
      </div>

      <div className="justify-center flex items-center gap-6 mt-4   ">
        <a href="">
          {" "}
          <FaInstagram className="hover:text-darkPink text-xl" />
        </a>
        <a href="">
          <BsFacebook className="hover:text-darkPink  text-xl" />
        </a>
        <a href="">
          <AiOutlineTwitter className="hover:text-darkPink  text-2xl" />
        </a>
      </div>
    </div>
    </div>
<div className="h-20 justify-center flex items-center">

    <p className="text-sm text-slate-600">@ 2023 Skin Cleanser Store. Powered by Skin Cleanser Store.</p>
</div>
    </>
  );
};

export default Footar_main;
