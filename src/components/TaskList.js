import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    "Tarefa 1",
    "Tarefa 2",
    "Tarefa 3",
    "Tarefa 4",
    "Tarefa 5",
    "Tarefa 6",
  ]);

  return (
    <div>
      <h1>Task to do:</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task} </li>
        ))}
      </ul>
    </div>
  );
}
