import { useState, useEffect } from 'react'
import './App.css'
import SearchContainer from './components/SearchContainer.jsx'
import DataContainer from './components/DataContainer.jsx'

function App() {    
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather('Hong Kong');}
    , []);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setLoading(false);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h1 className='title'>Weather App</h1>
      <div className='container'>
        <SearchContainer onSearch={fetchWeather}/>
        <DataContainer weatherData={weatherData} loading={loading} error={error}/>
      </div>
    </>
  )
}

export default App
