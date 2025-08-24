import { Foodimage } from "../Utils/Fooddata";
import FoodCard from "./FoodCard";

export default function Fooditems(){
    return(
        <>
        <div className="my-6 max-w-[85%] overflow-scroll max-h-[20%] flex  flex-wrap justify-center items-center  gap-3 container mx-auto">
           {
            Foodimage.map((obj,index)=>{
                // console.log(obj.imageId);
                return(
                    <FoodCard data={obj.imageId} key={index} link={obj.action.link}></FoodCard>
                )
            })
           }
        </div>
        </>
    )
}