import React from 'react';

const Country = props =>{
    return (
        <div>
            <img src={`https://www.countryflags.io/${props.stats.CountryCode}/flat/64.png`} alt={props.stats.Country}></img>
            <h1>{props.stats.Country}</h1>
            <div>
                <p>{`Active : ${props.stats.Active}`}</p>
                <p>{`Confirmed : ${props.stats.Confirmed}`}</p>
                <p>{`Deaths : ${props.stats.Deaths}`}</p>
                <p>{`Recovered : ${props.stats.Recovered}`}</p> 
            </div>
        </div>
    )
}
export default Country;