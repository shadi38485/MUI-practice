import React from "react";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

interface CategoryItemProps{
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;

}

const CategoryItem:React.FC<CategoryItemProps> = ({id, title, description, icon }) => {
  return (
    <Link to={`/category/:${id}`}>
        <Tab label={title} icon={icon} />
    </Link>
  );
};

export default CategoryItem;
