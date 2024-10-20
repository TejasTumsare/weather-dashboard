import React, { useState } from 'react';
import './SearchCity.css';

const SearchCity = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      console.log(`Searching for: ${input}`);
      setCity(input);
      setInput(''); 
    } else {
      alert('Please enter a valid city name');
    }
  };

  return (
    <div className="search-city">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(`Input updated: ${e.target.value}`);
        }}
        placeholder="Enter City Name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCity;
