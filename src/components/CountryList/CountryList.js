import React from 'react';
import Country from '../Country/Country'
import './countrylist.css'

const CountryList = ({stats}) =>  {
    return (
        <div className="countrylist">
            { //get country names with country code
                stats.map(country => <Country key={country.CountryCode} stats={country}/>)
            }
        </div>
    )
}
export default CountryList;