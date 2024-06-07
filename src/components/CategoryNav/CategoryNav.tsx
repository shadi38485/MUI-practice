import { Tabs } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import CategoryItem from "./CategoryItem";

const CategoryNav = () => {
  const categories = [
    {
      id: 1,
      title: "Cat 1",
      description: "Cat 1 Description",
      icon: <HotelIcon />,
    },
    {
      id: 2,
      title: "Cat 2",
      description: "Cat 2 Description",
      icon: <HotelIcon />,
    },
    {
      id: 3,
      title: "Cat 3",
      description: "Cat 3 Description",
      icon: <HotelIcon />,
    },
    {
      id: 4,
      title: "Cat 4",
      description: "Cat 4 Description",
      icon: <HotelIcon />,
    },
    {
      id: 5,
      title: "Cat 5",
      description: "Cat 5 Description",
      icon: <HotelIcon />,
    },
    {
      id: 6,
      title: "Cat 6",
      description: "Cat 6 Description",
      icon: <HotelIcon />,
    },
    {
      id: 7,
      title: "Cat 7",
      description: "Cat 7 Description",
      icon: <HotelIcon />,
    },
    {
      id: 8,
      title: "Cat 8",
      description: "Cat 8 Description",
      icon: <HotelIcon />,
    },
    {
      id: 9,
      title: "Cat 9",
      description: "Cat 9 Description",
      icon: <HotelIcon />,
    },
    {
      id: 10,
      title: "Cat 10",
      description: "Cat 10 Description",
      icon: <HotelIcon />,
    },
  ];
  return (
    <Tabs
      //   value={value}
      //   onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
    >
      {categories.map((item) => {
        return <CategoryItem {...item} key={item.id} />;
      })}
    </Tabs>
  );
};

export default CategoryNav;
