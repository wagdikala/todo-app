import "./summary.scss";
import { useContext, useEffect, useState } from "react";
import TasksContext from "../../context/TasksContext";
import CategoriesContext from "../../context/CategoriesContext";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "../shared/CircularProgress";
import Spinner from "../shared/Spinner";

function Summary() {
  const { tasks, tasksLoading } = useContext(TasksContext);
  const { categories, categoriesLoading } = useContext(CategoriesContext);

  const numberOfTasksInCategory = (category) => {
    return tasks.filter((task) => task.categoryName === category.categoryName)
      .length;
  };

  const completedTasks = (category) => {
    const numberOfTasks = tasks.filter(
      (task) => task.categoryName === category.categoryName
    );
    const completed = numberOfTasks
      .filter((item) => item.isCompleted)
      .reduce((acc) => ++acc, 0);
    const result = Math.floor((completed / numberOfTasks.length) * 100);
    console.log(result);
    return result;
  };

  return (
    <div className="summary-container">
      {categories.map((category) => (
        <div
          key={uuidv4()}
          className={`${category.categoryName.toLowerCase()} summary`}
        >
          <div className="text-stat">
            <h3
              className="title"
              style={{ color: `${category.categoryColor}` }}
            >
              {category.categoryName}
            </h3>
            <p>
              {tasks.length === 0
                ? `No Tasks`
                : tasks.length === 1
                ? `${numberOfTasksInCategory(category)} Task`
                : `${numberOfTasksInCategory(category)} Tasks`}{" "}
            </p>
          </div>
          <div className="progress-bar">
            <CircularProgress
              category={category}
              percentage={completedTasks(category)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
