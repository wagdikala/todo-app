import TaskList from "../taskList/TaskList";
import AddTask from "../addTask/AddTask";
import "./body.scss";
import { useContext, useEffect, useState } from "react";
import TasksContext from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";

function Body() {
  const { tasks } = useContext(TasksContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([...new Set(tasks.map((task) => task.category))]);
  }, [tasks]);

  return (
    <div className="body">
      <AddTask />
      {categories.map((cat) => {
        return (
          <TaskList
            key={uuidv4()}
            tasks={tasks.filter((task) => task.category === cat)}
          />
        );
      })}
    </div>
  );
}

export default Body;
