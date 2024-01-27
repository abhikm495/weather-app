import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import "./index.css";
import Description from "./components/Description/Description";
import { useEffect, useRef, useState } from "react";
import getWeatherData from "./WeatherService.js";
import Globe from "./components/Globe/Globe.js";
import Header from "./components/Header/Header.js";
function App() {
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hot);
  const unitButton = useRef();

  const hanldeUnit = () => {
    const currUnit = unitButton.current.innerText.slice(1);
    const isCelcius = currUnit === "C";
    unitButton.current.innerText = isCelcius ? "°F" : "°C";
    setUnits(!isCelcius ? "metric" : "imperial");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.elements.city.value;
    setCity(newCity);
  };

  useEffect(() => {
    setError(null);
    const fetchWeatherData = async () => {
      try {
        const data = await getWeatherData(city, units);
        setWeather(data);
        const threshold = units === "metric" ? 20 : 68;
        if (data.temp <= threshold) setBg(cold);
        else setBg(hot);
      } catch (error) {
        setError(`Invalid City`);
        return;
      }
    };
    fetchWeatherData();
  }, [units, city]);
  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <Header
              handleSubmit={handleSubmit}
              hanldeUnit={hanldeUnit}
              error={error}
              unitButton={unitButton}
            />
            <Globe latitude={weather.lat} longitude={weather.lon} />
            <div className="section section_temperature">
              <div className="icon">
                <h3>
                  {weather.name},{weather.country}
                </h3>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={weather.IconUrl}
                  alt="weather icon"
                />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${Math.round(weather.temp)} ${
                  units === "metric" ? "°C" : "°F"
                }`}</h1>
              </div>
            </div>

            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
