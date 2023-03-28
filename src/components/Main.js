import { useEffect, useState } from "react";
import ToDoInput from "./ToDoInput";
import ShowTodoList from "./ShowTodoList";
export default function Main() {
  const [temperature, setTemperature] = useState();
  const [weather, setWeather] = useState();
  const [toDoList, setToDoList] = useLocalStorage("todos", {default=""})
  let weatherHtml;
  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log(data);
      setTemperature(data.temperature);
      setWeather(data.isGoodWeather);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const checkWeather = setInterval(fetchWeather, 3000);
    // fetchWeather();
    return () => clearInterval(checkWeather);
  }, []);

  console.log(temperature, weather);
  if (weather) {
    weatherHtml = "The weather is good";
  } else {
    weatherHtml = "The weather is bad";
  }
  return (
    <>
      <div className={weather ? "imageDiv good" : "imageDiv bad"}>
        <div className="temperature">
          <p>{temperature}°C</p>
        </div>
        <div className="isGoodWeather">
          <p>{weatherHtml}</p>
        </div>
        <ShowTodoList />
        <ToDoInput />
      </div>
    </>
  );
}
