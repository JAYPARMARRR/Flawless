import { FaHandSparkles ,FaHandHoldingHeart } from "react-icons/fa"
import { BiSolidLeaf } from "react-icons/bi"


const All_Skin_Types = () => {
    return (
        <div className="wrapper  flex justify-between mt-20 mb-14">
            <div className=" h-[12rem] w-[20rem] justify-center text-center  items-center" >
                <div className="flex justify-center ">

                    <div className="justify-center text-center flex items-center bg-[#F8F8FF] h-16 w-16 rounded-full" >
                        <FaHandSparkles className="text-darkPink  h-7 w-7  " />
                    </div>
                </div>
                <h1 className="text-xl mt-2">All Skin Types</h1>
                <p className="leading-7">Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
            {/* ///////////////////////////////////// */}
            <div className=" h-[12rem] w-[20rem] justify-center text-center  items-center" >
                <div className="flex justify-center ">

                    <div className="justify-center text-center flex items-center bg-[#F8F8FF] h-16 w-16 rounded-full" >
                        <BiSolidLeaf className="text-darkPink  h-7 w-7  "/>
                    </div>
                </div>
                <h1 className="text-xl mt-2">Pure Organic</h1>
                <p className="leading-7">Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
            {/* ///////////////////////////////////// */}

            <div className=" h-[12rem] w-[20rem] justify-center text-center  items-center" >
                <div className="flex justify-center ">

                    <div className="justify-center text-center flex items-center bg-[#F8F8FF] h-16 w-16 rounded-full" >
                        <FaHandHoldingHeart className="text-darkPink  h-7 w-7  "/>
                    </div>
                </div>
                <h1 className="text-xl mt-2">Natural Care</h1>
                <p className="leading-7">Morbi nullam odio lectus vitae lorem in non tortor aliquet eget faucibus dui dolor.</p>
            </div>
        </div>
    )
}

export default All_Skin_Types
