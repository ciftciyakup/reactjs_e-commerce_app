import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ category, setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const selectedCategory = category;

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1 px-2 text-xl font-bold">KATEGORİ</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className={`text-lg mt-2 cursor-pointer hover:bg-gray-200 p-2 ${
            category == selectedCategory ? "bg-gray-200" : ""
          }`}
          key={i}
        >
          {category}
        </div>
      ))}
      <div
        onClick={(e) => {
          e.preventDefault();
          setCategory("");
        }}
        className="border-t pb-1 px-2 text-xl font-bold cursor-pointer"
      >
        Kategoriyi Temizle
      </div>
    </div>
  );
};

export default Category;
