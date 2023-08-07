import Image from "next/image"
import NewList from "../newList";

const HeaderSection=()=>{
    return(<>
        <div className="flex">
            <div id="section-1" className="m-2">
                <div id="top-img"> 
                    <Image src="/image-web-3-desktop.jpg"  width="600" height="300" alt="main-image"/>
                </div>
                <div id="bellow-top">
                    <div id="tagline"></div>
                    <div id="more-info"></div>
                </div>
            </div>
            <div id="section-2" className="p-7">
                <NewList/>
            </div>
        </div>
        </>)
}

export default HeaderSection;