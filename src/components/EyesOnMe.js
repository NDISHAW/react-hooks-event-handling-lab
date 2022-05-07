import React from "react";



function EyesOnMe(){
    function HandleFocus() {
        console.log("Good!");
    }
    function handleBlur(){
        console.log("Hey! Eyes on me!");
    }
    return (
        <button onFocus={HandleFocus} onBlur={handleBlur}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe;