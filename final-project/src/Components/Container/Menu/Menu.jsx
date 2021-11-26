import React from "react";
import Button from "../../Button/Button";




const Menu = () =>{

    return(
        <div className="w-full h-24 bg-purple-500 flex flex-row justify-end p-6 ">
            <Button localStyle="bg-pink-500 text-white font-normal font-semibold p-2 w-32" text="Logout"/>
        </div>
    )
}

export default Menu;