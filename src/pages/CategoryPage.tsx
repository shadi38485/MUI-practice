import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import { CategoryType } from "../types/Category";
import HotelCard from "../components/hotels/HotelCard";
import { Grid } from "@mui/material";
import categoryService from "../services/categoryServive";

const CategoryPage = () => {
  const { id } = useParams();

  const [category, setCategory] = useState<CategoryType>();

  useEffect(() => {

   categoryService.getCategory(id)
   .then ((data)=>setCategory(data));

  }, [id]);

  return (
    <MainLayout>
      <img src={category?.icon} alt={category?.title} />
      <p>{category?.description}</p>
      <h5>Hotels</h5>
      <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3, lg:4}}>
        {category?.hotels.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </Grid>
    </MainLayout>
  );
};

export default CategoryPage;
