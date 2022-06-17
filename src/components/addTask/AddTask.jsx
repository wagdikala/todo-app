import "./add-task.scss";
import TasksContext from "../../context/TasksContext";
import { useState, useContext } from "react";

function AddTask() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { addTask } = useContext(TasksContext);

  const handleTextChange = (e) => {
    if (e.target.value.length === 0) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleAddTask = () => {
    addTask({ taskTitle: text, isCompleted: false });
    setBtnDisabled("none");
    setText("");
  };
  return (
    <div className="input">
      <input
        onChange={handleTextChange}
        className="input-task"
        type="text"
        placeholder="Enter a new task.."
        value={text}
      />
      <svg
        className={`add-btn ${btnDisabled && "disabled"}`}
        pointerEvents={btnDisabled ? "none" : "auto"}
        onClick={() => handleAddTask()}
        viewBox="0 0 512 512"
      >
        <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
      </svg>
    </div>
  );
}

export default AddTask;
