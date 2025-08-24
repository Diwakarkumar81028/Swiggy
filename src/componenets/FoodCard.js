
export default function FoodCard(props){
    // console.log(data.imageId);
    console.log(props);
    return(
      <>
      <a href={props.link} target="_blank">
        <img className="h-35" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+props.data}></img>
        </a>
      </>
    )
}