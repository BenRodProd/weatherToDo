import { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import Header from "./Header";
export default function Main() {
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState(false);

  let weatherHtml;

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();

      setTemperature(data.temperature);
      setWeather(data.isGoodWeather);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const checkWeather = setInterval(fetchWeather, 3000);

    return () => clearInterval(checkWeather);
  }, []);

  if (weather) {
    weatherHtml = "The weather is good";
  } else {
    weatherHtml = "The weather is bad";
  }
  return (
    <>
      <Header weather={weather} />
      <div className={weather ? "imageDiv good" : "imageDiv bad"}>
        <div className="temperature">
          <p>{temperature}°C</p>
        </div>
        <div className="isGoodWeather">
          <p>{weatherHtml}</p>
        </div>

        <ToDoInput weather={weather} />
      </div>
    </>
  );
}
