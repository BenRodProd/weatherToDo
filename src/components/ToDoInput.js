export default function ToDoInput() {
  function handleSubmit(e) {}
  return (
    <div className="inputForm">
      <p>Enter New To Do</p>
      <form>
        <input className="inputfield" type="text" name="newTodo"></input>
        <p>
          <label htmlFor="goodWeatherCheckboxtype">
            Is this a good weather task?
          </label>
          <input name="goodWeatherCheckboxtype" type="checkbox"></input>
        </p>
        <p>
          <button onClick={handleSubmit} type="submit">
            Save Task
          </button>
        </p>
      </form>
    </div>
  );
}
