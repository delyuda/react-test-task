import React from "react";
import './AsteroidDetails.css';

function AsteroidDetails (props) {
    return (
        <div className='details'>
            <h2>Asteroid Details</h2>
            <div>
                <b>Name:</b>
                <span>{props.data.name}</span>
            </div>
            <div>
                <a href={props.data.nasa_jpl_url}>{props.data.nasa_jpl_url}</a>
            </div>
            <div>
                <b>Is potentially hazardous asteroid:</b>
                <span>{props.data.is_potentially_hazardous_asteroid.toString()}</span>
            </div>
        </div>
    )
}

export default AsteroidDetails;