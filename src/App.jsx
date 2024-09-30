import { TaskItem } from "./components/TaskItem";

export function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <TaskItem
        title="Tarefa 1"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
      <TaskItem
        title="Tarefa 2"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
    </div>
  );
}
