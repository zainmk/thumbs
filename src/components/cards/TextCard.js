import * as React from 'react';
import MovingComponent from "react-moving-text";

function TextCard(){

    return (
        <>
        <br/>
            <MovingComponent
                type="bounce"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="5"
                fillMode="none">
                Welcome to thumbs! Search for the movies you enjoyed and create your favourites list! 
            </MovingComponent>
        </>
    )
}

export default TextCard;