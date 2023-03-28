import { useEffect, useState } from "react";
export default function Main() {
  const [temperature, setTemperature] = useState();
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        console.log(data.temperature);
        setTemperature(data.temperature);
      } catch (error) {
        console.log(error);
      }
    }
    // setInterval(fetchWeather(), 1000);
    fetchWeather();
    // clearInterval();
  }, [temperature]);
  return (
    <>
      <div className="temperature">{temperature}</div>
    </>
  );
}
