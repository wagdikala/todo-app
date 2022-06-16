import { createContext, useState } from "react";
import { tasksArr } from "../components/data/tasks";

//Creating the Context
const TasksContext = createContext();

// Providing the context
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArr);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const setComplete = (taskId) => {
    console.log(taskId);
    setTasks(() =>
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, setComplete }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
