import type { Task } from "../../types/task";
import ListItem from "./ListItem";
import styles from "./styles.module.css";

interface ListProps {
  tasks: Task[];
  onChangeStatus: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

function List({ tasks, onChangeStatus, onDeleteTask }: ListProps) {
  return (
    <>
      <div className={styles.container}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}
          ></ListItem>
        ))}
      </div>
    </>
  );
}

export default List;
