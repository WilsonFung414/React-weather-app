import { IoThunderstormOutline } from "react-icons/io5";
import { BsCloudDrizzle } from "react-icons/bs";
import { IoRainyOutline } from "react-icons/io5";
import { IoMdSnow } from "react-icons/io";
import { LuCloudFog } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { IoCloudyOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function WeatherIcon({ weatherId }) {

    const weatherIcon = (weatherId) => {
        if (weatherId >= 200 && weatherId < 300) {
            return <IoThunderstormOutline />;
        } else if (weatherId >= 300 && weatherId < 500) {
            return <BsCloudDrizzle />;
        } else if (weatherId >= 500 && weatherId < 600) {
            return <IoRainyOutline />;
        } else if (weatherId >= 600 && weatherId < 700) {
            return <IoMdSnow />;
        } else if (weatherId >= 700 && weatherId < 800) {
            return <LuCloudFog />;
        } else if (weatherId === 800) {
            return <FiSun />;
        } else if (weatherId > 800) {
            return <IoCloudyOutline />;
        }
    }

  return (
    <IconContext.Provider value={{ size: '5rem' }}>
    <div className="weather-icon">
        {weatherIcon(weatherId)}
    </div>
    </IconContext.Provider>

  );
}

export default WeatherIcon;

