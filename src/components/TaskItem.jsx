import styles from "./TaskItem.module.css";

import trashIcon from "../assets/trashIcon.svg";

export function TaskItem(props) {
  const randomId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={styles.container}>
      <div className={styles.controlIcons}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id={randomId}
            className={styles.checkboxInput}
          ></input>
          <label htmlFor={randomId} className={styles.checkboxLabel}></label>
        </div>
        <button>
          <img src={trashIcon} />
        </button>
      </div>

      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
