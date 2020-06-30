import React from "react";
import './AsteroidDetails.css';

function AsteroidDetails (props) {
    return (
        <div>
            <h2>Asteroid Details</h2>
            <div>
                <b>Name:</b>
                <div>{props.name}</div>
            </div>
            <div>
                <a href={props.nasa_jpl_url}>{props.nasa_jpl_url}</a>
            </div>
            <div>
                <b>Is potentially hazardous asteroid:</b>
                <div>{props.is_potentially_hazardous_asteroid}</div>
            </div>
        </div>
    )
}

export default AsteroidDetails;