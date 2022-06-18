import "./summary.scss";
import { useContext, useEffect, useState } from "react";
import CategoriesContext from "../../context/CaegotiesContext";
import TasksContext from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "../shared/CircularProgress";

function Summary() {
  const { tasks } = useContext(TasksContext);
  const { categories } = useContext(CategoriesContext);

  const completedTasks = () => {
    return tasks.filter((item) => item.isCompleted).reduce((acc) => ++acc, 0);
  };

  return (
    <div className="summary-container">
      {categories.map((item) => (
        <div
          key={uuidv4()}
          className={`${item.categoryName.toLowerCase()} summary`}
        >
          <div className="text-stat">
            <h3 className="title">{item.categoryName}</h3>
            <p>
              {tasks.length === 0
                ? `No Tasks`
                : tasks.length === 1
                ? `${tasks.length} Task`
                : `${tasks.length} Tasks`}{" "}
            </p>
          </div>
          <div className="progress-bar">
            <CircularProgress category={item} completedTasks={5} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
