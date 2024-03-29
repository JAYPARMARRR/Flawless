import "../Styles/Home.css";
import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-hero-lg h-[95vh]">
        <nav className="flex justify-between items-center shadow-2xl ">
          
            <ul className=" flex text-white p-6 cursor-pointer">
              <li className="block py-2 pl-3 pr-4  hover:text-darkPink "> <Link to="/">HOME</Link></li>
              <li className="block py-2 pl-3 pr-4  hover:text-darkPink"> <Link to="/shop">SHOP</Link></li>
              <li className="block py-2 pl-3 pr-4  hover:text-darkPink"> <Link to="/about">ABOUT</Link></li>
              <li className="block py-2 pl-3 pr-4  hover:text-darkPink"> <Link to="/contact">CONTACT</Link></li>
            </ul>
          
          <h1 className="text-white py-2 pl-3 pr-4 text-4xl cursor-pointer">
            Flawless
          </h1>

          <div className="flex text-white text-xl mx-32 gap-x-4 cursor-pointer ">
            <span className="">$44.98</span>
            <AiTwotoneShopping className="mt-[2px]" />
            <span className="bg-white rounded-full h-4 w-4 text-xs my-[-1vh] mx-[-16px] justify-center items-center flex text-black hover:text-darkPink " >1</span>
          </div>
        </nav>

        <hr />
        <div className="wrapper">

        <p className="text-white mt-36 ml-16" >WELCOME TO FLAWLESS STORE</p>
        <h1 className="text-white text-7xl mt-16 ml-12">The Best Skin</h1>
        <h1 className="text-white text-7xl mt-4 ml-12"> Cleanser for You</h1>
        <button className="border-white border px-8 py-4 text-[13px] text-white hover:bg-white hover:text-darkPink duration-500 ml-16 mt-11">SHOP NOW</button>
        </div>

      </div>
    </>
  );
};

export default Home;
 