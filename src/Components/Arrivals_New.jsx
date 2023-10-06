import { useState } from "react";
import DataShop from "../Services/Shop";
import { FaShoppingBag } from "react-icons/fa";

const Arrivals_New = () => {
  const [isHovering, setisHovering] = useState(false);



 
  const MouseOver = () => {
    setisHovering(true);
  };

  const MouseOut = () => {
    setisHovering(false);
  };

  return (
    <>
      <div className="wrapper">
        <div className="flex  justify-between items-center mt-20 ">
          <h1 className="text-[5vh] text-lightGray ml-14">New Arrivals</h1>
          <button className="border-darkPink border px-6 py-3 text-[13px] text-darkPink hover:bg-darkPink hover:text-white duration-500 ">
            SHOP NOW
          </button>
        </div>
  
        <div className="flex gap-6 flex-wrap  ">
          {DataShop().map((e) => {
            return (
              <>
                <div
                  key={e.id}
                  className=" h-[66vh] w-[35vh] ml-1 "
                  >
                      {isHovering && (
                          <>
                          <div className=" justify-end flex items-center  "> 
                 
                            <FaShoppingBag className="text-slate-600 duration-500 absolute  "  />
                          </div>
                          </>
                        )}
                  <img
                    src={e.img}
                    
                    className=" h-[53vh] cursor-pointer"
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                    
                    />{e.id}
                  <p className="text-slate-400 text-[14px]">{e.Category}</p>
                  <p className="text-[16px] text-slate-900">{e.title}</p>
                  <p className="text-[19px]">☆☆☆☆☆</p>
                  <p className="text-[16px]">{e.price}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
     
    </>
  );
};

export default Arrivals_New;
