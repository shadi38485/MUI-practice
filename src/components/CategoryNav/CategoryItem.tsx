import React from "react";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

interface CategoryItemProps{
  id: number;
  title: string;
  description: string;
  icon: string;

}

const CategoryItem:React.FC<CategoryItemProps> = ({id, title, description, icon }) => {
  return (
    <Link to={`/category/${id}`}>
        <Tab label={title} icon={<img src={icon} width={24} height={24} alt={icon} />}/>
    </Link>
  );
};

export default CategoryItem;
