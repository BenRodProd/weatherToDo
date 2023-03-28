import useLocalStorageState from "use-local-storage-state";
import ShowTodoList from "./ShowTodoList";
export default function ToDoInput(weather) {
  const [newToDoList, setToDoList] = useLocalStorageState("todo", {
    defaultValue: [],
  });
  const [toDoListWeather, settoDoListWeather] = useLocalStorageState(
    "weather",
    {
      defaultValue: [],
    }
  );
  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = e.target.newToDo.value;

    setToDoList([...newToDoList, newToDo]);
    const newToDoCheck = e.target.newToDoCheck.checked;

    settoDoListWeather([...toDoListWeather, newToDoCheck]);
    e.target.reset();
  }
  return (
    <>
      <ShowTodoList
        toDoListWeather={toDoListWeather}
        toDo={newToDoList}
        weather={weather}
        setToDoList={setToDoList}
        settoDoListWeather={settoDoListWeather}
      />
      <div className="inputForm">
        <p>Enter New To Do</p>
        <form onSubmit={handleSubmit}>
          <input
            id="newToDo"
            className="inputfield"
            type="text"
            name="newTodo"
          ></input>
          <p>
            <label htmlFor="goodWeatherCheckboxtype">
              Is this a good weather task?
            </label>
            <input
              id="newToDoCheck"
              ame="goodWeatherCheckboxtype"
              type="checkbox"
            ></input>
          </p>
          <p>
            <button type="submit">Save Task</button>
          </p>
        </form>
      </div>
    </>
  );
}
