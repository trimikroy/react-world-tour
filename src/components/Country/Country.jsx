 import React, { useState } from 'react';
 import './Country.css'
 
const Country = ({ countryValue }) => {
    const { name, flags } = countryValue;
    
    const [visited, setVisited] = useState(false);
    //console.log(!visited);

    const handleVisited =()=>{
        setVisited(!visited);
       
    }
    
    
    return (
        <>
            <div className='country'>
                <img className='flagsImg' src={flags.png} alt="" />
                <h3 >Name : {name?.common}</h3>
                <p>official name: {name?.official}</p>

                <button onClick={handleVisited}>{visited ? 'visited': 'going'} </button>
                <p>{visited ? <p className='visT'>this country visited</p> : <p className='visF'>I want visit</p>}</p>
            </div>
        </>
    );
 };
 
 export default Country;