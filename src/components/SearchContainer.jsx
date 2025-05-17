import React, { useState } from 'react'


function SearchContainer({onSearch}) {

    const [city, setCity] = useState(''); // Declare a state variable 'city' and a function 'setCity' to update the state variable

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(city);
    }

    return (
        <div className="search-container">
            <form onSubmit={submitHandler}>
                <input className="input-container" type='text' value={city} onChange={(e) => {setCity(e.target.value)}} placeholder='Enter City Name' required/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchContainer