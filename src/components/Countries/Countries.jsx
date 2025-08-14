import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [ visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    const handleVisitedCountry = (country) => {
        console.log('add this your visited country')
        //console.log(country);
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
     console.log(visitedFlags)
    return (
        <div >
            <h2>Countries: {countries.length}</h2>
            <div>
                <h5>Visited Country list :{visitedCountries.length} </h5>
                <ul>
                   {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                   }
                </ul>
            </div>
            <div className='flagDiv'>
                {
                    visitedFlags.map(flag => <img className='flag' src={flag}></img>)
                }
            </div>
            <div className='mainDiv'>

                {
                    countries.map(country => <Country 
                        key={country.id}
                        countryValue={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;