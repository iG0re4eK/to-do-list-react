import { useState } from "react";
import styles from "./styles.module.css";
import type { Task } from "../../types/task";

interface TaskAddProps {
  onAdd: (input: Task) => void;
}

function TaskAdd({ onAdd }: TaskAddProps) {
  const [inputTitle, setInputTitle] = useState<string>("");

  const formattedDate = (value: number) => {
    return value < 10 ? "0" + value : value.toString();
  };

  const handleOnAdd = () => {
    if (inputTitle.trim()) {
      const date = new Date();
      const seconds = date.getSeconds();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedSeconds = formattedDate(seconds);
      const formattedMinutes = formattedDate(minutes);
      const formattedHours = formattedDate(hours);
      const formattedDay = formattedDate(day);
      const formattedMonth = formattedDate(month);

      const newTask: Task = {
        id: Date.now().toString(),
        title: inputTitle,
        status: false,
        date: `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`,
      };
      onAdd(newTask);
      setInputTitle("");
    }
  };

  const onKeyboardPres = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleOnAdd();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <input
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={onKeyboardPres}
          className={`${styles["input-title"]}`}
          type="text"
          value={inputTitle}
          placeholder="Напишите название задачи..."
        />
        <button
          onClick={handleOnAdd}
          disabled={!inputTitle}
          className={`${styles["add-btn"]}`}
        >
          Добавить
        </button>
      </div>
    </>
  );
}

export default TaskAdd;
