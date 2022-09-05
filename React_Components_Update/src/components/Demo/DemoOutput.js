import React from "react";

const DemoOutput = (props) =>{
    console.log("Demo Output is Running!!")
    return<p>{props.show ? 'This is New!!' : ''}</p>



}

// Only if the Value of Props Change Then only React.memo will render the component
export default React.memo(DemoOutput)