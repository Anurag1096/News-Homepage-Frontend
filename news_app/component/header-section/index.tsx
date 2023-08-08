import Image from "next/image"
import NewList from "../newList";

const HeaderSection=()=>{
    return(<>
        <div className="md:flex md:items-start ">
            <div id="section-1" className="m-2">
                <div id="top-img"> 
                    <Image src="/image-web-3-desktop.jpg"  width="900" height="200" alt="main-image" />
                </div>
                <div id="bellow-top" className="py-10 md:max-w-4xl md:flex">
                    <div className=" md:w-1/3" id="tagline"> 
                    <h1 className=" font-extrabold text-5xl  ">The Bright Futrure Of Web 3.0?</h1>
                    </div>
                    <div id="more-info" className="md:w-1/3">
                        <p>We drive into the next evolution of the web that
                            claims to put the power of the platforms back into the useImperativeHandle
                               </p>
                        <button className=" bg-red-400">Read more</button>
                    </div>
                </div>
            </div>
            <div id="section-2" className="p-1">
                <NewList/>
            </div>
        </div>
        </>)
}

export default HeaderSection;