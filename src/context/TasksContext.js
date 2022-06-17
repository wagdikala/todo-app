import { createContext, useState, useEffect } from "react";

//Creating the Context
const TasksContext = createContext();

// Providing the context
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/tasks?_sort=id&_order=desc");
    const data = await response.json();
    setTasks(data);
    setLoading(false);
  };

  const addTask = async (task) => {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([data, ...tasks]);
  };

  const deleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`tasks/${taskId}`, { method: "DELETE" });
    }
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const setComplete = async (task) => {
    const response = await fetch(`/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    setTasks(tasks.map((item) => (task.id === item.id ? data : item)));
  };

  const isEditing = async (task) => {
    if (task.isEditing === true) {
      task.isEditing = false;
      const response = await fetch(`/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();
      console.log(data);

      // setTasks(
      //   tasks.map((item) => {
      //     return { ...item, isEditing: false };
      //   })
      // );
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
      value={{ tasks, addTask, deleteTask, setComplete, isEditing, loading }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
