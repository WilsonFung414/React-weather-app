import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import WeatherIcon from "./WeatherIcon";
import { IconContext } from "react-icons";

function DataContainer({ weatherData, error, loading }) {

  const city = weatherData?.name;
  const temperature = weatherData?.main.temp.toFixed(1);
  const weatherDescription = weatherData?.weather[0].description;
  const windSpeed = weatherData?.wind.speed;
  const humidity = weatherData?.main.humidity;

  const formatTime = (epochTime) => {
    const date = new Date(epochTime * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substr(-2)}`;
  };

  const sunrise = formatTime(weatherData?.sys.sunrise);
  const sunset = formatTime(weatherData?.sys.sunset);

  {
      if(error){
        return <div className="sys-info">{error}</div>
      }
      else if(loading){
        return <div className="sys-info">Loading...</div>
      }
      return (<div className="data-container">
        <div className="title-data">
          <h2>{city}</h2>
        </div>
        <WeatherIcon weatherId={weatherData?.weather[0].id} />
        <div className="title-data">
          <p>{weatherDescription}</p>
        </div>
        <div className="title-data">
          <p>{temperature} °C</p>
        </div>
        <div className="data-row">
          <div className="data-col">
            <div className="data">
              <h2>
                <WiHumidity value={{ size: '5rem' }} />
              </h2>
              <p>{humidity} %</p>
            </div>
            <div className="data">
              <h2>
                <FiSunrise />
              </h2>
              <p>{sunrise}</p>
            </div>
          </div>
          <div className="data-col">
            <div className="data">
              <h2>
                <FaWind />
              </h2>
              <p>{windSpeed} m/s</p>
            </div>
            <div className="data">
              <h2>
                <FiSunset />
              </h2>
              <p>{sunset}</p>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

export default DataContainer;
