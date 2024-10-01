import { Plus } from "@phosphor-icons/react";

import { TaskItem } from "./TaskItem";
import styles from "./TaskBoard.module.css";

export function TaskBoard() {
  return (
    <div className={styles.taskBoard}>
      <div className={styles.taskHeader}>
        <h1>To do list</h1>
        <button className={styles.btnNewTask}>
          <Plus size={14} weight="bold" />
          new
        </button>
      </div>

      <TaskItem
        title="Tarefa 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sequi molestiae. Voluptatum tempore veritatis maxime facere, neque velit aspernatur nisi, eaque quos reprehenderit totam nobis soluta at minima provident expedita!"
      />
      <TaskItem
        title="Tarefa 2"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
      <TaskItem
        title="Tarefa 3"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
      <TaskItem
        title="Tarefa 4"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
      <TaskItem
        title="Tarefa 5"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, non!"
      />
    </div>
  );
}
