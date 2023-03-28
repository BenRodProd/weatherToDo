export default function ShowTodoList({
  toDo,
  toDoListWeather,
  weather,
  setToDoList,
  settoDoListWeather,
}) {
  const htmlgood = [];
  const htmlbad = [];
  for (let i = 0; i < toDo.length; i++) {
    if (toDoListWeather[i]) {
      htmlgood.push(toDo[i]);
    } else {
      htmlbad.push(toDo[i]);
    }
  }
  function handleDelete(el) {
    const index = toDo.findIndex((element) => element === el);

    toDo.splice(index, 1);
    toDoListWeather.splice(index, 1);

    setToDoList(toDo);
    settoDoListWeather(toDoListWeather);
  }

  return (
    <div className="showToDo">
      <h2>DO THIS NOW!</h2>
      <ul className="ToDoList">
        {weather.weather
          ? htmlgood.map((el) => {
              return (
                <li
                  className="listItem"
                  onClick={() => handleDelete(el)}
                  key={crypto.randomUUID()}
                >
                  {el}
                </li>
              );
            })
          : htmlbad.map((el) => {
              return (
                <li
                  className="listItem"
                  onClick={() => handleDelete(el)}
                  key={crypto.randomUUID()}
                >
                  {el}
                </li>
              );
            })}
      </ul>
      <p>__________________________</p>
    </div>
  );
}
