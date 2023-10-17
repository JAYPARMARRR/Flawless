import IIMGG1 from "../assets/skin-cleanser-template-testimonials-avatar-img-2.jpg";
import IIMGG2 from "../assets/skin-cleanser-template-testimonial-avatar-img.jpg";
import IIMGG3 from "../assets/skin-cleanser-template-testimonials-avatar-img-1.jpg";

const Customers_Say = () => {
  return (
    <div className="mt-[20rem]">
      <div className="flex justify-center items-center">
        <h1 className="text-[2.5rem]">What Our Customers Say</h1>
      </div>
      {/* //////// */}

      <div className="   flex justify-between w-full p-20">

        <div className=" w-[33%]  text-center">
          <p className="text-darkPink text-2xl pt-2">★★★★★</p>
          <p className="text-[18px] mt-2  text-slate-600">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <div className="flex justify-center items-center mt-4">
            <img src={IIMGG1} className="rounded-full " />
          </div>
          <p className="mt-4 text-[14px]">JENNIFER LEWIS</p>
        </div>
        {/* /////////////////// */}
        <div className=" w-[33%]  text-center">
          <p className="text-darkPink text-2xl pt-2">★★★★★</p>
          <p className="text-[18px] mt-2 text-slate-600">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <div className="flex justify-center items-center mt-4">
            <img src={IIMGG2} className="rounded-full " />
          </div>
          <p className="mt-4 text-[14px]">ALICIA HEART</p>
        </div>
        {/* /////////////////// */}
        <div className="w-[33%]  text-center">
          <p className="text-darkPink text-2xl pt-2">★★★★★</p>
          <p className="text-[18px] mt-2 text-slate-600 ">
            Sed odio donec curabitur auctor amet tincidunt non odio enim felis
            tincidunt amet morbi egestas hendrerit.
          </p>
          <div className="flex justify-center items-center mt-4">
            <img src={IIMGG3} className="rounded-full " />  
          </div>
          <p className="mt-4 text-[14px]">JUAN CARLOS</p>
        </div>

      </div>
    </div>
  );
};

export default Customers_Say;
