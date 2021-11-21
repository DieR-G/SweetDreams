import React from "react";
import Button from "../../Button/Button"
import base from '../../../Assets/img/mountains.jpg';


const Card = () => {

    //remember to change the width of the card to full once you start to produce them with the images
    return (
        <div className=" group  w-60 h-60 bg-filler  m-4 rounded-xl shadow-lg    ">
            <div className="  w-full h-full rounded-xl flex flex-col justify-center  justify-items-center place-content-center gap-4 backdrop-filter group-hover:backdrop-blur-lg transition ease-in duration-500">
                <p className="text-center m-8 invisible group-hover:visible font-normal font-semibold text-white ">Title</p>
                <Button localStyle="h-8 rounded-xl invisible group-hover:visible transition bg-purple-400 m-8 text-white font-bold font-bold" text="See More" />
            </div>
        </div >
    )
}


export default Card;