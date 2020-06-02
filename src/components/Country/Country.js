import React from 'react';
import './country.css';

const Country = props =>{
    return (
        <div className="country">
            <img src={`https://www.countryflags.io/${props.stats.CountryCode}/flat/64.png`} alt={props.stats.Country}></img>
            <h2>{props.stats.Country}</h2>
            <div className="describe">
                <p>{`Active : ${props.stats.Active}`}</p>
                <p>{`Confirmed : ${props.stats.Confirmed}`}</p>
                <p>{`Deaths : ${props.stats.Deaths}`}</p>
                <p>{`Recovered : ${props.stats.Recovered}`}</p> 
            </div>
        </div>
    )
}
export default Country;