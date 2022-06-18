import { createContext, useState, useEffect, useContext } from "react";
import Task from "../components/task/Task";
import TasksContext from "./TasksContext";

const CategoriesContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    fetchData();
    setCategoriesLoading(false);
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
  };

  return (
    <CategoriesContext.Provider value={{ categories, categoriesLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
