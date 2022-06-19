import { createContext, useState, useEffect, useContext } from "react";
import Task from "../components/task/Task";
import TasksContext from "./TasksContext";

const CategoriesContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoryColors, setCategoryColors] = useState([
    "#F72585",
    "#4361EE",
    "#AB71EB",
    "#B5179E",
    "#180545",
  ]);

  useEffect(() => {
    fetchData();
    setCategoriesLoading(false);
  }, []);

  const fetchData = async () => {
    const response = await fetch("/categories");
    const data = await response.json();
    setCategories(data);
  };

  const addCategory = async (categoryName) => {
    const newCategory = {
      categoryName: categoryName,
      categoryColor:
        categoryColors[Math.floor(Math.random() * categoryColors.length)],
    };
    const response = await fetch("/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    });
    fetchData();
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, categoriesLoading, addCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
