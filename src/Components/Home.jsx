// DEFAULT COLORS
// rgb(251, 75, 122);
// rgb(250, 45, 100);
//  rgb(100, 100, 103);

import "../Styles/Home.css";
import { AiTwotoneShopping } from "react-icons/ai";
import { FiLogIn } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <div className="Home_main-img h-[94vh]  ">

        <nav className="flex justify-between items-center">
          <div>

          <ul className=" flex text-white p-6 cursor-pointer">
            <li className="block py-2 pl-3 pr-4  ">HOME</li>
            <li className="block py-2 pl-3 pr-4">SHOP</li>
            <li className="block py-2 pl-3 pr-4">ABOUT</li>
            <li className="block py-2 pl-3 pr-4 ">CONTACT</li>
          </ul>
          </div>
          <h1 className="text-white py-2 pl-3 pr-4 text-4xl">Flawless</h1>


          <FiLogIn className="text-yellow-400 "/>
          <div className="flex text-white py-2 pl-3 pr-4">
            <span >$44.98</span>
            <AiTwotoneShopping />
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Home;
