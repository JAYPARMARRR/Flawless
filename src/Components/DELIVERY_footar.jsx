import { BiSolidTruck } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaTruckPickup } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";

const DELIVERY_footar = () => {
  return (
    <div className="border-solid border-y-2 border-y-slate-200 mt-32  h-44  flex justify-center gap-4">

      <div className="w-[22%] flex justify-center items-center gap-3">
        <span className="bg-[#F8F8FF] rounded-full w-12 h-12 flex justify-center items-center ">
          <BiSolidTruck className="w-6 h-6 text-darkPink" />
        </span>
        <div >
          <p className="text-sm">FREE DELIVERY</p>
          <p className="text-sm">Nullam pharetra egestas mollis</p>
        </div>
      </div>




      <div className="w-[22%] flex justify-center items-center gap-3">
        <span className="bg-[#F8F8FF] rounded-full w-12 h-12 flex justify-center items-center ">
          <MdPayment className="w-6 h-6 text-darkPink" />
        </span>
        <div >
          <p className="text-sm">EASY PAYMENT</p>
          <p className="text-sm">Urna est enim pellentesque</p>
        </div>
      </div>


      <div className="w-[22%] flex justify-center items-center gap-3">
        <span className="bg-[#F8F8FF] rounded-full w-12 h-12 flex justify-center items-center ">
          <FaTruckPickup className="w-6 h-6 text-darkPink" />
        </span>
        <div >
          <p className="text-sm">TRACK ORDER</p>
          <p className="text-sm">Mauris lacus nunc pellentesque</p>
        </div>
      </div>


      <div className="w-[22%] flex justify-center items-center gap-3">
        <span className="bg-[#F8F8FF] rounded-full w-12 h-12 flex justify-center items-center ">
          <BsQuestionCircleFill className="w-6 h-6 text-darkPink" />
        </span>
        <div >
          <p className="text-sm">HAVE QUESTIONS?</p>
          <p className="text-sm">Vulputate enim quis sollicitudin</p>
        </div>
      </div>

    </div>
  );
};

export default DELIVERY_footar;
