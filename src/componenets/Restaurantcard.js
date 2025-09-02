

export default function Restaurantcard(props){

    return(
        <div className="flex justify-center items-center"> 
       <div className="flex w-65 relative">
        <a href={"https://www.swiggy.com/restaurants/"+props.id+"/dineout"}>
            <img className="h-40 w-60 rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.image}/>
            <p className="text-[15px] absolute top-30 left-px font-bold text-white ml-0.5">{props.name}</p>
            <p className="text-[14px] absolute top-30 right-[29px] font-bold text-white flex items-center bg-green-700 p-0.5 mr-0.5 rounded-[5px]">*{props.rating}</p>
            </a>
       </div>
       </div>
    
    )
}

