import React, { Component } from 'react'

const Weather = props => {
    return (
        <div>
            {props.city && props.country && <p>Location : {props.city}, {props.country} </p>}
            {props.temperature && <p>Temperature: {props.temperature} {'\u00b0'}C</p>}
            {props.feels_like && <p>Feels Like: {props.feels_like} {'\u00b0'}C</p>}
            {props.min_temp && <p>Maximum Temperature: {props.min_temp} {'\u00b0'}C</p>}
            {props.max_temp && <p>Minimum Temperature: {props.max_temp} {'\u00b0'}C</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;
