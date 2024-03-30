import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  const apiKey = 'fdd65bd32b38221b94c4d7b034051a24'; // API key
  const city = 'Philippines'; // Replace with the desired city
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();

    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${meridiem} ${now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
      setCurrentTime(formattedTime);
    };

    // Set interval to update time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, [apiUrl]);

  return (
    <div className='weather-forecast'>
      {weatherData && (
        <>
          <div className='left-weather'>
            <span>{currentTime}</span>
            <p>Laguna, {weatherData.name}</p>
          </div>
          <div className='right-weather'>
            <p>{Math.round(weatherData.main.temp - 273.15)}°C</p>
            {weatherData.weather[0].icon && (
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt='weather-status'
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Weather;
