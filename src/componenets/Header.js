

export default function Header(){
    
    return(
        <header className="bg-orange-600 text-white font-serif">
            <div className="flex  items-center py-5 justify-center gap-49">
                <div>
                     <img className="w-38 h-10 ml-6" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                </div>
               <div className="font-bold  flex gap-6 items-center">
                  <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                  <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                  <a className="border-1 rounded-2xl p-2"  href="https://www.swiggy.com/corporate/" target="_blank">Get the App</a>
                  <a className="rounded-2xl p-2 bg-black" href="https://www.swiggy.com/corporate/" target="_blank">Sign in</a>
               </div>
            </div>
            
            <div className="py-5 relative">
                <img className="w-40 h-90 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="w-40 h-90 absolute right-0 top-5" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-3xl max-w-[60%] container mx-auto flex justify-center align-middle text-center font-bold">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="container mx-auto flex justify-center items-center my-4 gap-10">
                    <input className="bg-white p-2 text-gray-900 w-60 rounded-2xl" placeholder="Enter your delivery location"/>
                    <input className="bg-white p-2 text-gray-900 w-90 rounded-2xl" placeholder="Search for restaurant,item or More"/>
                </div>
            </div>

            <div className="flex container mx-auto justify-center">
             <a target="_blank" href="https://www.swiggy.com/restaurants">
                 <img className="w-70 h-64" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
             </a>
             <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                 <img className="w-70 h-64" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img> 
             </a>
             <a target="_blank" href="https://www.swiggy.com/dineout">
                 <img className="w-70 h-64" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
             </a>
            </div>
        </header>
        
    )
}