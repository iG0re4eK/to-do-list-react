import type { Task } from "../../../types/task";
import styles from "./styles.module.css";

interface ListItemProps {
  task: Task;
  onChangeStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function ListItem({ task, onChangeStatus, onDeleteTask }: ListItemProps) {
  return (
    <>
      <div
        className={`${styles.container} ${task.status ? styles.disabled : ""}`}
      >
        <div className={`${styles["left-box"]} `}>
          <input
            type="checkbox"
            checked={task.status}
            onChange={() => onChangeStatus(task.id)}
          />
          <div
            className={`${styles.title} ${task.status ? styles.disabled : ""}`}
          >
            {task.title}
          </div>
        </div>

        <div className={`${styles["right-box"]} `}>
          <div className={styles.date}>{task.date}</div>
          <button
            className={`${styles["delete-btn"]}`}
            onClick={() => onDeleteTask(task.id)}
          >
            Удалить
          </button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
