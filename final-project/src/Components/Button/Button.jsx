import React from "react";


//Since the style may vary from use to use, then is passed as a property
const Button = ({ localStyle, text = "", onClick = () => { }, background }) => {
    return (
        <>
            {background ? (
                <button className={localStyle} onClick={onClick} style={{ backgroundImage: `url(${background})` }}>{text}</button>

            ) : (
                <button className={localStyle} onClick={onClick}>{text}  </button>
            )}
        </>

    )
}


export default Button;


