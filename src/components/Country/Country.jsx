 import React, { useState } from 'react';
 import './Country.css'
 
const Country = ({ countryValue, handleVisitedCountry, handleVisitedFlags }) => {

    const { name, flags } = countryValue;
    const [visited, setVisited] = useState(false);
    //console.log(!visited);
    //console.log(handleVisitedCountry)

    const handleVisited =()=>{
        setVisited(!visited);
       
    }
    
    return (
        <>
            <div className={`country ${visited ? 'visited': 'non-visited' } `}>
                <img className='flagsImg' src={flags.png} alt="" />
                <h3 >Name : {name?.common}</h3>
                <p>official name: {name?.official}</p>
                    <br />
                   
                
                <button onClick={() => handleVisitedCountry(countryValue)}>visited</button>
                
                <button onClick={handleVisited}>{visited ? 'visited': 'going'} </button>
                <br />
                <button onClick={() => handleVisitedFlags(countryValue.flags.png)}>Visited Flags</button>
                <p>{visited ? <p className='visT'>this country visited</p> : 
                <p className='visF'>I want visit</p>}</p>
            </div>
        </>
    );
 };
 
 export default Country;