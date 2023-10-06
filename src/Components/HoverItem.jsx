/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const HoverItem = ({ e, key }) => {
  const [hoverItem, sethoverItem] = useState(null);

  return (
    <>
      <div
        key={e.id}
        className=" h-[66vh] w-[35vh] mt-9 "
        onMouseOver={() => sethoverItem(true)}
        onMouseOut={() => sethoverItem(false)}
      >
        {hoverItem && (
          <>
            <div className=" justify-end flex items-center  ">
              <FaShoppingBag
                className="text-slate-600 duration-500 absolute cursor-pointer"
              />
            </div>
          </>
        )}
        <img src={e.img} className=" h-[53vh] cursor-pointer " />
        {e.id}
        <p className="text-slate-400 text-[14px]">{e.Category}</p>
        <p className="text-[16px] text-slate-900">{e.title}</p>
        <p className="text-[19px]">☆☆☆☆☆</p>
        <p className="text-[16px]">{e.price}</p>
      </div>
    </>
  );
};

export default HoverItem;
