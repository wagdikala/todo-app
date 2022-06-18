import Task from "../task/Task";
import { useState, useContext, useEffect } from "react";
import "./taskList.scss";
import TasksContext from "../../context/TasksContext";

function TaskList({ tasks, category }) {
  return (
    <div className="container">
      <div
        className={`num-of-taks`}
        style={{ color: `${category.categoryColor}` }}
      >
        {tasks.length === 1 ? `${tasks.length} Task` : `${tasks.length} Tasks`}
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            categoryColor={category.categoryColor}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
