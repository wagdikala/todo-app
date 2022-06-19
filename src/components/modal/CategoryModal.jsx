import "./category-modal.scss";
import TasksContext from "../../context/TasksContext";
import CategoriesContext from "../../context/CategoriesContext";
import { useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

function CategoryModal() {
  const { showModal, setShowModal } = useContext(TasksContext);
  const { categories } = useContext(CategoriesContext);

  const handleSelect = (e) => {
    const category = e.target.innerHTML;
    addTask({ taskTitle: text, isCompleted: false, categoryName: category });
    setBtnDisabled("none");
    setText("");
    setShowModal(false);
  };

  useEffect(() => {
    console.log(categories[0]);
  }, [categories]);

  return (
    <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
      <h1>Select Category</h1>
      <div className="container">
        <div className="category-select">
          {categories.map((category) => {
            <div
              key={uuidv4()}
              onClick={handleSelect}
              className="category"
              style={{ backgroundColor: `${category.categoryColor}` }}
            >
              <p>{`${category.categoryName}`}</p>
            </div>;
          })}
          <div className="category add-category">
            <svg viewBox="0 0 512 512">
              <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryModal;
