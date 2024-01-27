const API_KEY = "5b6e990e9df5119bded403a926127545";

// coord: {lon: 77.6033, lat: 12.9762}
const makeIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, unit = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`;
  const data = await fetch(URL);
  const jsonData = await data.json();
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
    coord: { lon, lat },
  } = jsonData;
  const { description, icon } = weather[0];
  return {
    description,
    IconUrl: makeIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    lon,
    lat,
  };
};
export default getWeatherData;
