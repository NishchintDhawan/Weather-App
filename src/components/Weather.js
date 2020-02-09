import React from 'react'

const Weather = props => {

    return (
        // display the data when available.
        <div>

            <div className="row">
                <div className="col-6">
                    {props.city && props.country &&
                        <div className="weather-info card text-center text-light bg-dark">
                            <p className="weather-location-title"> <span className="weather-parameter-caption">{props.city}, {props.country} </span></p>
                            {props.temperature && <p className="weather-temperature-title"> {props.temperature} {'\u00b0'}C</p>}
                            {props.feels_like && <p className="weather-feels-like"> <span className="weather-parameter-caption"> Feels Like </span> :  {props.feels_like} {'\u00b0'}C</p>}
                        </div>
                    }
                </div>
                <div className="col-6">
                    {props.city && props.country &&
                        <div className="weather-info card text-center text-light bg-dark">
                            <p className="weather-parameter"> <span className="weather-parameter-caption">Max</span> :  {props.min_temp} {'\u00b0'}C </p>
                            <p className="weather-parameter"> <span className="weather-parameter-caption">Min</span> : {props.max_temp} {'\u00b0'}C  </p>
                            <p className="weather-parameter"> <span className="weather-parameter-caption">Humidity </span> : {props.humidity} {'\u0025'} </p>
                            <p className="weather-parameter"> <span className="weather-parameter-caption">Conditions </span> : {props.description} </p>
                            <p className="weather-parameter"> <span className="weather-parameter-caption">Wind </span> : {props.wind} km/hr </p>
                        </div>
                    }
                </div>
                <div className="col-12">
                    <div className="text-center error-text">
                        {props.error && <p>{props.error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Weather;
