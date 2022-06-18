import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ category, percentage }) {
  return (
    <CircularProgressbar
      value={percentage}
      text={percentage === 0 ? `` : `${percentage}%`}
      strokeWidth={9}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathTransitionDuration: 0.5,
        pathColor: `${category.categoryColor}`,
        textColor: `${category.categoryColor}`,
      })}
    />
  );
}

export default CircularProgress;
