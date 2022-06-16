import Task from "../task/Task";
import { useState, useContext, useEffect } from "react";
import "./taskList.scss";
import TasksContext from "../../context/TasksContext";

function TaskList() {
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const { tasks } = useContext(TasksContext);

  useEffect(() => {
    setNumberOfTasks(tasks.length);
  }, [tasks]);

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
