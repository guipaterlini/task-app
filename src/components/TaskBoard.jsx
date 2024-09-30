import { TaskItem } from "./TaskItem";
import styles from "./TaskBoard.module.css";

export function TaskBoard() {
  return (
    <div className={styles.taskBoard}>
      <header>
        <h1>To Do List</h1>
        <button>+ new</button>
      </header>

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
