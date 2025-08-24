import React from "react";
import ReactDom from "react-dom/client";
import Header from "./componenets/Header";
import Fooditems from "./componenets/Fooditems";
import Shopitems from "./componenets/Shopitems";
function App(){

    return(
        // .
        <>
        <Header></Header>
        <Fooditems></Fooditems>
        <Shopitems></Shopitems>
        </>
    )
}

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);