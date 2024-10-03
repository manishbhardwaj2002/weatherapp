import React, { useState } from 'react'
import Search from './Search';
import axios from 'axios';

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState()

    const fetchWeatherData = async (param) => {

        try {
            setLoading(true)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=a74f32d2ab839abc3beb19a813bab6a7`)

            console.log(response.data)

            setLoading(false)
            setWeatherData(response.data)


        }
        catch (error) {

            console.log('fetching weather data', error)
        }




    }

    const getCurrentDate=()=>{

        return(
            new Date().toLocaleString("en-US", { month: "long", year: 'numeric', date:'numeric', weekday:'long' })

        )
    }


    const handleSearch = () => {
        fetchWeatherData(search)

    }



    return (
        <div>
        <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
  
        {loading ? (
          <div>Loading.....</div>
        ) : (
          weatherData && (
            <>
              <h2>
                {weatherData?.name}, {weatherData?.sys?.country}
              </h2>
              <div>{getCurrentDate()}</div>
              <div>Temperature: {Math.round(weatherData?.main?.temp - 273.15)}°C</div>  {/* Convert from Kelvin to Celsius */}
              <div>Weather: {weatherData?.weather[0]?.description}</div>  {/* Weather description */}
              <div>Wind degree: {weatherData?.wind?.deg}</div>
              <div>Wind speed: {weatherData?.wind?.speed}</div> 
              <div>humidity: {weatherData?.main?.humidity}</div>  
            </>
          )
        )}
      </div>
    )
}

export default Weather
