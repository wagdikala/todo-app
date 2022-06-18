import TaskList from "../taskList/TaskList";
import Spinner from "../shared/Spinner";
import "./body.scss";
import AddTask from "../addTask/AddTask";
import { useContext, useEffect, useState } from "react";
import CategoriesContext from "../../context/CategoriesContext";
import TasksContext from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";

function Body() {
  const { tasks } = useContext(TasksContext);
  const { categories, loading } = useContext(CategoriesContext);

  return (
    <div className="body">
      <AddTask />
      {categories.map((cat) => {
        return (
          <TaskList
            tasks={tasks.filter(
              (task) => task.categoryName === cat.categoryName
            )}
            category={cat}
            key={cat.id}
          />
        );
      })}
    </div>
  );
}

export default Body;
