import "tailwindcss/tailwind.css";

export default function TaskList({ tasks, setTasks }) {
  const handleCheckboxChange = (taskToChange) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskToChange.id) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    );
  };

  return (
    <ul className="decoration-slate-50	flex	">
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheckboxChange(task)}
          />
          <span
            style={{
              color: task.checked ? "grey" : "black",
              textDecoration: task.checked ? "line-through" : "none",
            }}
          >
            {task.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
