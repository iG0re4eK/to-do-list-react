import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import TaskAdd from "./components/TaskAdd";
import type { Task, TaskData } from "./types/task";

function App() {
  const [tasks, setTasks] = useState<TaskData>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  const handleSortTasks = () => {
    setTasks((prev) =>
      prev.sort((a, b) => Number(b.status) - Number(a.status))
    );
  };

  const handleChangeStatus = (id: string) => {
    setTasks((prev) =>
      prev.map((el) => (el.id === id ? { ...el, status: !el.status } : el))
    );
    handleSortTasks();
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) =>
      prev.filter((el) => {
        if (el.id !== id) {
          return el;
        }
      })
    );
  };

  return (
    <>
      <TaskAdd onAdd={handleAddTask}></TaskAdd>
      <List
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onDeleteTask={handleDeleteTask}
      ></List>
    </>
  );
}

export default App;
