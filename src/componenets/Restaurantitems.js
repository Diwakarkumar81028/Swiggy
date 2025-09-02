import { Restaurantdata } from "../Utils/Restaurantdata";
import Restaurantcard from "./Restaurantcard";

export default function Restaurantitems(){

    return(
        <>
        <div className="flex ml-22  pt-10 mb-5 text-[15px] font-bold"><h1>Discover best restaurants on Dineout</h1></div>
        <div className="flex gap-6 mx-22 justify-center items-center  overflow-x-scroll mb-20 ">
            {
                Restaurantdata.map((obj,index)=>{
                    return <Restaurantcard key={index} name={obj.info.name}  image={obj.info.mediaFiles[0].url} rating={obj.info.rating.value} id={obj.info.id}></Restaurantcard>
                })
            }
        </div>
     </>
    )
}

//media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a
