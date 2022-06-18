import "./app.scss";
import "./dark.scss";
import Header from "./header/Header";
import Summary from "./summary/Summary";
import Body from "./body/Body";
import { categories } from "./data/categories";
import { TaskProvider } from "../context/TasksContext";
import { CategoryProvider } from "../context/CategoriesContext";
import { useContext, useState, useEffect } from "react";
import CategoriesContext from "../context/CategoriesContext";

function App() {
  return (
    <TaskProvider>
      <CategoryProvider>
        <div className="wrapper">
          <div className="main">
            <Header user={"Wagdi"} />
            <Summary />
            <Body />
          </div>
        </div>
      </CategoryProvider>
    </TaskProvider>
  );
}

export default App;
