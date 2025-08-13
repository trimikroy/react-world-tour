import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div >
            <h2>Countries: {countries.length}</h2>
            <div className='mainDiv'>

                {
                    countries.map(country => <Country key={country.id} countryValue={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;