import About_FOUNDER_img from "../assets/about_immg.jpg";

const About_FOUNDER = () => {
  return (
    <>
      <div className="flex justify-center items-cente  h-[100vh] w-full px-20">
        <div className=" h-[35rem] w-[55rem]">
          <img
            src={About_FOUNDER_img}
            className=" bg-cover bg-no-repeat  mt-24"
          />
        </div>

        <div className="bg-slate-400 h-[35rem] w-[55rem] mt-20">
          <div className=" flex justify-center items-center">
            <p >FROM FOUNDER</p>
            <p>
              Eget porttitor facilisi nunc placerat enim luctus arcu cursus
              habitant vulputate venenatis iaculis nunc et at viverra viverra 
              sociis.
            </p>
            <p>MILA CHRISTINE</p>
            <p>Founder</p>
          </div>

          <div>     
            <p>SOCIAL MEDIA</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About_FOUNDER;
