import Task from "../task/Task";
import { useState, useContext, useEffect } from "react";
import "./taskList.scss";
import TasksContext from "../../context/TasksContext";

function TaskList({ tasks }) {
  const [numberOfTasks, setNumberOfTasks] = useState(0);

  useEffect(() => {
    console.log(tasks);

    setNumberOfTasks(tasks.length);
  }, []);

  return (
    <div className="container">
      <div className="num-of-taks">
        {numberOfTasks === 0
          ? "No Tasks"
          : numberOfTasks === 1
          ? `${numberOfTasks} Task`
          : `${numberOfTasks} Tasks`}
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
