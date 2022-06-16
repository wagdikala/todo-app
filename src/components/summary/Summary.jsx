import "./summary.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colors } from "../data/categoriesColors";

function Summary({ categories }) {
  const workPercentage = 66;
  return (
    <div className="summary-container">
      {categories.map((item) => (
        <div
          key={item.id}
          className={`${item.categoryName.toLowerCase()} summary`}
        >
          <div className="text-stat">
            <h3 className="title">{item.categoryName}</h3>
            <p>{`${item.numberOfTasks} Tasks`}</p>
          </div>
          <div className="progress-bar">
            <CircularProgressbar
              value={workPercentage}
              text={`${workPercentage}%`}
              strokeWidth={9}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: `#${colors[item.id]}`,
                textColor: `#${colors[item.id]}`
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Summary;
