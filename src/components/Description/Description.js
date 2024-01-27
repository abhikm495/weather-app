import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { GiPressureCooker } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaTemperatureEmpty } from "react-icons/fa6";

/* <FaTemperatureArrowUp />; */
import "./Description.css";

const Description = ({ weather, units }) => {
  console.log(units);
  const tempUnit = units === "imperial" ? "°F" : "°C";
  const cards = [
    {
      id: 1,
      icon: <FaTemperatureArrowDown />,
      title: "min",
      data: Math.round(weather.temp_min),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaTemperatureArrowUp />,
      title: "max",
      data: Math.round(weather.temp_max),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <FaTemperatureEmpty />,
      title: "feels-like",
      data: weather.feels_like,
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <GiPressureCooker />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <WiHumidity />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <BsSpeedometer2 />,
      title: "wind-speed",
      data: weather.speed,
      unit: "m/s",
    },
  ];

  return (
    <div className="section section_description">
      {cards.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="description_card-icon">
              {item.icon}
              <small>{item.title}</small>
            </div>
            <div>
              <h2>
                {item.data}
                {item.unit}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Description;
