import "./app.scss";
import "./dark.scss";
import Header from "./header/Header";
import Summary from "./summary/Summary";
import Body from "./body/Body";
import { categories } from "./data/categories";
import { TaskProvider } from "../context/TasksContext";
import CategoryModal from "./modal/CategoryModal";

function App() {
  return (
    <TaskProvider>
      <div className="wrapper">
        <div className="main">
          <Header user={"Wagdi"} />
          <Summary categories={categories} />
          <Body />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
