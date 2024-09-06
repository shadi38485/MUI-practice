import { Tabs, Tooltip } from "@mui/material";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import { CategoryType } from "../../types/Category";
import categoryService from "../../services/categoryServive";

// type Category = {
//   id: number;
//   title: string;
//   icon: React.ReactElement;
//   description: string;
// };

const CategoryNav = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    categoryService.getAllCategories()
    .then(data => setCategories(data));
    
    // fetch(
    //   "https://ef9fb2cd-6655-408c-9f86-95b407cafeaf.mock.pstmn.io/categories"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCategories(data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {categories.map((item) => (
        <Tooltip key={item.id} title={item.description} arrow>
          <div>
            <CategoryItem {...item} />
          </div>
        </Tooltip>
      ))}
    </Tabs>
  );
};

export default CategoryNav;
