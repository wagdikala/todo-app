import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";

function CircularProgress({ category, completedTasks }) {
  const [percentange, setPercentange] = useState(0);

  useEffect(() => {
    const percent = Math.floor(completedTasks * 100);
    if (completedTasks > 0) {
      setPercentange(percent);
    }
  }, [category]);

  return (
    <CircularProgressbar
      value={percentange}
      text={percentange === 0 ? `` : `${percentange}%`}
      strokeWidth={9}
      styles={buildStyles({
        strokeLinecap: "butt",
        pathColor: `${category.categoryColor}`,
        textColor: `${category.categoryColor}`,
      })}
    />
  );
}

export default CircularProgress;
