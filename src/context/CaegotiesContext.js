import { createContext, useState, useEffect, useContext } from "react";
import TasksContext from "./TasksContext";

const CategoriesContext = createContext();

export const CategoryProvider = ({ children }) => {
  const { tasks } = useContext(TasksContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(tasks);
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/categories");
    const data = await response.json();
    setCategories(data);
  };

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
