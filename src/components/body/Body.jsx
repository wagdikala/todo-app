import TaskList from "../taskList/TaskList";
import AddTask from "../addTask/AddTask";
import "./body.scss";

function Body() {
  return (
    <div className="body">
      <AddTask />
      <TaskList />
      <TaskList />
    </div>
  );
}

export default Body;
