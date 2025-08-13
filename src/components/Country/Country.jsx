 import React from 'react';
 import './Country.css'
 
const Country = ({ countryValue }) => {
    const { name, flags } = countryValue;
    console.log(countryValue)
    return (
        <>
            <div className='country'>
                <img className='flagsImg' src={flags.png} alt="" />
                <h3 >Name : {name?.common}</h3>
                <p>official name: {name?.official}</p>
            </div>
        </>
    );
 };
 
 export default Country;