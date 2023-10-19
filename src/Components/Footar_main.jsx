import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";



const Footar_main = () => {
  return (
    <>
    <div className="border-solid border-b-2 border-y-slate-200 ">

    
    <div className="h-64 mt-28 ">
      <h1 className="text-2xl text-center font-light">Flawless</h1>
      <div className=" justify-center flex items-center ">
        <ul className=" flex text-black p-6 cursor-pointer gap-8">
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink ">
          <Link to="/">Home</Link>
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
          <Link to="/Shop">Shop</Link>
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
          <Link to="/About">About</Link>
          </li>
          <li className="block py-2 pl-3 pr-4 text-slate-700 hover:text-darkPink">
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="justify-center flex items-center gap-6 mt-4   ">
        <a href="https://www.instagram.com/nick_owen777/ " target="_blank">
          {" "}
          <FaInstagram className="hover:text-darkPink text-xl" />
        </a>
        <a href="https://www.facebook.com/people/Nick-Owen/pfbid02KQ7RVhmchXo71ciB8ZxRXiCQwUjVa8UBidFRKLZZjtqDN5H6NLymy3kchzx5hditl/?mibextid=ZbWKwL%2F" target="_blank">
          <BsFacebook className="hover:text-darkPink  text-xl"  />
        </a>
        <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH27xWXKeGQRQAAAYtB9PcYRt0WuXVBDpzN2JYo5j3SOHbciW2KabkqT1ejtXwdwJEK5IBq6Y_Ye_bHNBrbP9K_d6nsqbllKuYpfmWDj8Nv1iQDr2tlnRp-59fpKDzqouCixFo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjaykumar-vinodbhai-852823260" target="_blank">
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
