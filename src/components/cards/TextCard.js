import * as React from 'react';
import MovingComponent from "react-moving-text";

function TextCard(){



    fetch('https://api.api-ninjas.com/v1/dadjokes', {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'your-rapidapi-key',
			'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
		},
	})
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));



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