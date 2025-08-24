import Shopcard from "./Shopcard";
import {Shopdata} from "../Utils/Shopdata";


export default function Shopitems(){
  
     return(
        <>
        <div className="flex ml-22  pt-15 mb-5 text-[20px] font-bold"><h1>Shop groceries on Instamart</h1></div>
        <div className="flex gap-6 mx-22 justify-center items-center overflow-x-scroll mb-20">
            {
                Shopdata.map((obj,index)=>{
                    return <Shopcard key={index} image={obj.imageId} link={obj.action.link} text={obj.action.text}></Shopcard>
                })
            }
        </div>
        </>
     )
}