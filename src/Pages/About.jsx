import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import About_FOUNDER from "../Page_components/About_FOUNDER";

const About = () => {
  return (
    <>
   
      <div className="bg-center bg-no-repeat bg-aboutImgMain h-screen">



        <nav className="flex justify-between items-center shadow-2xl ">
          <ul className=" flex text-white p-6 cursor-pointer">
            <li className="block py-2 pl-3 pr-4  hover:text-darkPink ">
              {" "}
              <Link to="/">HOME</Link>
            </li>
            <li className="block py-2 pl-3 pr-4  hover:text-darkPink">
              {" "}
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="block py-2 pl-3 pr-4  hover:text-darkPink">
              {" "}
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="block py-2 pl-3 pr-4  hover:text-darkPink">
              {" "}
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>

          <h1 className="text-white py-2 pl-3 pr-4 text-4xl cursor-pointer">
            Flawless
          </h1>

          <div className="flex text-white text-xl mx-32 gap-x-4 cursor-pointer ">
            <span className="">$44.98</span>
            <AiTwotoneShopping className="mt-[2px]" />
            <span className="bg-white rounded-full h-4 w-4 text-xs my-[-1vh] mx-[-16px] justify-center items-center flex text-black hover:text-darkPink ">
              1
            </span>
          </div>
        </nav>

        <hr />

        <div className="wrapper  h-[65vh] text-white flex justify-end items-center flex-col text-center">
          <h1 className="text-6xl text ">About</h1>
          <p className="w-[50%] leading-8 pt-7">Enim lectus mauris faucibus turpis convallis ipsum odio lorem dignissim odio enim nullam venenatis erat cursus tortor tristique aliquam nulla.</p>
         <p className="mt-3">━━━</p>
        </div>
      </div>
      <About_FOUNDER/>
    </>
  );
};

export default About;
