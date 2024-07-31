import { useState } from "react";
import { categories } from "./categories";
import { FaArrowDownLong } from "react-icons/fa6";

interface CategoryItemProps {
  id: number;
  name: string;
  icon?: JSX.Element;
  isActive: boolean;
  handleClickCategory: (item: any) => void;
}

function CategoryItem(props: CategoryItemProps) {
  const { id, name, icon, isActive, handleClickCategory } = props;
  return (
    <li className="mb-8">
      <button
        className={`flex flex-col items-center space-y-2 ${
          isActive ? "text-th-primary" : "text-white"
        }`}
        onClick={() => handleClickCategory({ id, name })}
      >
        {icon}
        <span className="text-sm font-medium">{name}</span>
      </button>
    </li>
  );
}

const NavigationMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const handleClickCategory = (category: any) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <ul className="flex flex-col items-center px-5">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            {...category}
            isActive={category.id === selectedCategory.id}
            handleClickCategory={handleClickCategory}
          />
        ))}
      </ul>
      <button className="bg-white text-dark w-8 h-8 rounded-full flex justify-center items-center shadow-xl fixed bottom-0 left-28 lg:left-12">
        <FaArrowDownLong />
      </button>
    </>
  );
};

export default NavigationMenu;
