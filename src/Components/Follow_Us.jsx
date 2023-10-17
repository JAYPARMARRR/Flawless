import IIImgg1 from "../assets/skin-cleanser-template-gallery-img-6.jpg"
import IIImgg2 from "../assets/skin-cleanser-template-gallery-img-3.jpg"
import IIImgg3 from "../assets/skin-cleanser-template-gallery-img-5.jpg"
import IIImgg4 from "../assets/skin-cleanser-template-gallery-img-2.jpg"
import IIImgg5 from "../assets/skin-cleanser-template-gallery-img-4.jpg"
import IIImgg6 from "../assets/skin-cleanser-template-gallery-img-1.jpg"

const Follow_Us = () => {
  return (
    <div >
      <h1 className="text-center text-2xl mt-[8rem] mb-[3rem]" >Follow Us @flawlesscleanser</h1>
      <div className="flex justify-center items-center">

      <div className="grid grid-rows-2 grid-flow-col gap-x-9 gap-y-9   w-[70%] ">
        <img src={IIImgg1}  />
        <img src={IIImgg2}  />
        <img src={IIImgg3}  />
        <img src={IIImgg4}  />
        <img src={IIImgg5}  />
        <img src={IIImgg6}  />
      </div>
      </div>
    </div>
  )
}

export default Follow_Us
