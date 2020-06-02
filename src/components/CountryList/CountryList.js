import React from 'react';
import Country from '../Country/Country'

const CountryList = (props) =>  {
    return (
        <div>
            { //get country names
                props.stats.map(country => <Country key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;