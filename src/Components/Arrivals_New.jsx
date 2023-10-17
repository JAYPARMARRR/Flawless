import DataShop from "../Services/Shop";
import HoverItem from "./hoverItem";

const Arrivals_New = () => {
  return (
    <>
      <div className="wrapper  ">
        <div className="flex  justify-between items-center mt-20 ">
          <h1 className="text-[5vh] text-lightGray ml-14">New Arrivals</h1>
          <button className="border-darkPink border px-6 py-3 text-[13px] text-darkPink hover:bg-darkPink hover:text-white duration-500 ">
            SHOP NOW
          </button>
        </div>
        {/* ctrl+alt+t */}
        <div className="flex justify-center items-center ">

          <div className="flex  gap-8 flex-wrap  w-[85%] ">
            {DataShop().map((e, index) => {
              return <HoverItem key={index} e={e} />  
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals_New;
