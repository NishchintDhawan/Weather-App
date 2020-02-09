import React from 'react'

const Form = props => {
    return (
        <div className="form-container">
            <div style={{textAlign :"center"}}>
                <form onSubmit={props.getWeather} id="weatherForm">
                    <input className="form_element" type="text" name="city" placeholder="City..." />

                    <input className="form_element" type="text" name="country" placeholder="Country Code..." />

                    <button className="form_element" type="submit" form="weatherForm" value="Submit">Get Weather</button>
                </form>
            </div>
        </div >
    );
}

export default Form;