import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  function uniqueId() {
    const timePart = new Date().getTime();
    const randomPart = Math.floor(Math.random() * 1000000);
    return `${timePart}-${randomPart}`;
  }

  const handleAdd = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: uniqueId(),
        name: inputValue,
        checked: false,
      };
      onAdd(newTask);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}
