import Beauty_Flawless_Skin_img from "../assets/girl.jpg";

const Beauty_Flawless_Skin = () => {
  return (
    <>
      <div className="wrapper bg-slate-500 flex  mt-52" >
        <div className="h-[40rem]  w-[100rem]">
          <img src={Beauty_Flawless_Skin_img} className="" />
        </div>
        <div >
          <h1>━━━━</h1>
          <h1 className="text-4xl">Beauty Flawless Skin</h1>
          <p>
            Enim lectus mauris faucibus turpis convallis ipsum odio lorem
            dignissim id odio sed enim nullam venenatis erat in cursus tortor
            tristique aliquam nulla quis.
          </p>
          <p>
            Aliquam scelerisque scelerisque ac laoreet laoreet faucibus
            vestibulum fringilla ut aliquet dictumst dignissim id eget cras
            nulla venenatis dictum tristique faucibus lectus egestas aenean
            placerat dolor dolor phasellus eros vestibulum velit turpis ornare
            facilisis ante ornare.
          </p>
          <button className="border-darkPink border px-6 py-3 text-[13px] text-darkPink hover:bg-darkPink hover:text-white duration-500 ">
            READ MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Beauty_Flawless_Skin;
