import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <>
    <div className="bg-center bg-no-repeat bg-white h-screen">



<nav className="flex justify-between items-center shadow-2xl ">
  <ul className=" flex text-black p-6 cursor-pointer">
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

  <h1 className="text-black py-2 pl-3 pr-4 text-4xl cursor-pointer">
    Flawless
  </h1>

  <div className="flex text-darkPink text-xl mx-32 gap-x-4 cursor-pointer ">
    <span className="">$44.98</span>
    <AiTwotoneShopping className="mt-[2px]" />
    <span className="bg-darkPink rounded-full h-4 w-4 text-xs my-[-1vh] mx-[-16px] justify-center items-center flex text-black hover:text-darkPink ">
      1
    </span>
  </div>
</nav>

<hr />


</div>
      
    </>
  )
}

export default Shop
