import { useState } from "react";
import "./App.css";

function TaskInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter task"
      value={value}
      onChange={onChange}
      className="Task-input"
    />
  );
}

function TaskButton({ onClick }) {
  return (
    <button onClick={onClick} className="Task-button">
      Add Task
    </button>
  );
}

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleButtonClick = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const HandleDeleteTaskClick = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Locked In Task Manager</h1>
        <div className="Task-input-container">
          <TaskInput value={task} onChange={handleInputChange} />
        </div>
        <div className="Task-button-container">
          <TaskButton onClick={handleButtonClick} />
        </div>
        <ul
          className={`Task-list ${
            tasks.length > 0 ? "Task-list-bordered" : ""
          }`}
        >
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                onClick={() => HandleDeleteTaskClick(index)}
                className="Task-delete-button"
              >
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
