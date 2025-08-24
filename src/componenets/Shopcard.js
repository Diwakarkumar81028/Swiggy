

export default function Shopcard(props){

    return(
       <div className="flex justify-center items-center"> 
       <div className="flex w-30">
        <a href={props.link}>
        <img className="h-30 w-auto" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.image}></img>
        <p className="font-bold text-[10px] flex justify-center">{props.text}</p>
        </a>
       </div>
       </div>
    )
}