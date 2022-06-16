import { createContext, useState } from "react";
import { tasksArr } from "../components/data/tasks";

//Creating the Context
const TasksContext = createContext();

// Providing the context
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArr);
  const [inEdit, setInEdit] = useState();

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

  const isEditing = (task) => {
    if (task.isEditing === true) {
      setTasks(
        tasks.map((item) => {
          return { ...item, isEditing: false };
        })
      );
    } else {
      setTasks(
        tasks
          .map((item) => {
            return { ...item, isEditing: false };
          })
          .map((item) => {
            if (item.id === task.id) {
              return { ...item, isEditing: true };
            }
            return { ...item };
          })
      );
    }
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, deleteTask, setComplete, isEditing }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
