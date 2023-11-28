import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "tailwindcss/tailwind.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <AddTask onAdd={addNewTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
