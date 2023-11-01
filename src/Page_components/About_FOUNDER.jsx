import About_FOUNDER_img from "../assets/about_immg.jpg";
import { AiOutlineInstagram ,AiFillYoutube } from "react-icons/ai";
import { FaFacebook ,FaPinterest} from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import All_Skin_Types from "../Components/All_Skin_Types";


 

const About_FOUNDER = () => {
  return (
    <>
      <div className="flex justify-center items-cente  h-[100vh] w-full px-20">
        <div className=" h-[37rem]  w-[56rem]">
          <img
            src={About_FOUNDER_img}
            className=" bg-cover bg-no-repeat  mt-32"
          />
        </div>

        <div className=" ml-24 mt-32  h-[32rem]  w-[60rem]">
          <div className="mt-16 ">
            <p className="text-slate-500 tracking-tight leading-[3rem] mb-8  " >FROM FOUNDER</p>
            <p className=" font-bold w-[103%]  text-2xl  mb-8">
             Eget porttitor facilisi nunc placerat enim luctus arcu cursus
              habitant vulputate venenatis iaculis nunc et at viverra viverra 
              sociis
            </p>
            <p className="font-bold  text-[15px]">MILA CHRISTINE</p>
            <p className="text-slate-500 text-sm">Founder</p>
            <div className=" text-slate-300 mt-6">━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          </div>

          <div className="mt-8  ">     
            <p>SOCIAL MEDIA</p> 
            <div className="flex gap-5 mt-4  text-xl cursor-pointer">
              <AiOutlineInstagram className="hover:text-darkPink "/>
              <FaFacebook className="hover:text-darkPink"/>
              <FaPinterest className="hover:text-darkPink"/>
              <BsTwitter className="hover:text-darkPink"/>
              <AiFillYoutube className="hover:text-darkPink"/>
            </div>
          </div>
          
        </div>
      
      </div>
      <All_Skin_Types />
    </>
  );
};

export default About_FOUNDER;
