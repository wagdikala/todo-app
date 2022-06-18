import { createContext, useState, useEffect } from "react";

//Creating the Context
const TasksContext = createContext();

// Providing the context
export const TaskProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [tasksLoading, setTasksLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/tasks");
    const data = await response.json();
    setTasks(data);
    setTasksLoading(false);
  };

  const addTask = async (task) => {
    await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    fetchData();
  };

  const deleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`tasks/${taskId}`, { method: "DELETE" });
      fetchData();
      // setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const setComplete = async (task) => {
    const response = await fetch(`/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    fetchData();
    // const data = await response.json();
    // setTasks(tasks.map((item) => (task.id === item.id ? data : item)));
  };

  const doneEditing = async (task) => {
    await fetch(`/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    setIsEditing(false);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        setComplete,
        doneEditing,
        tasksLoading,
        isEditing,
        setIsEditing,
        setShowModal,
        showModal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
