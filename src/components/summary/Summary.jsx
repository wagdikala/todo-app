import "./summary.scss";
import { useContext, useEffect, useState } from "react";
import TasksContext from "../../context/TasksContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colors } from "../data/categoriesColors";

function Summary({ categories }) {
  const [workPercentage, setWorkPercentage] = useState(0);
  const { tasks } = useContext(TasksContext);

  const completedTasks = () => {
    return tasks.filter((item) => item.isCompleted).reduce((acc) => ++acc, 0);
  };

  useEffect(() => {
    const percent = Math.floor((completedTasks() / tasks.length) * 100);
    if (tasks.length > 0) {
      setWorkPercentage(percent);
    }
    // } else {
    //   setWorkPercentage("N/A");
    // }
  }, [tasks]);

  return (
    <div className="summary-container">
      {categories.map((item) => (
        <div
          key={item.id}
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
            <CircularProgressbar
              value={workPercentage}
              text={workPercentage === 0 ? `` : `${workPercentage}%`}
              strokeWidth={9}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: `#${colors[item.id]}`,
                textColor: `#${colors[item.id]}`,
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
