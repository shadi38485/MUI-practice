import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import { CategoryType } from "../types/Category";
import HotelCard from "../components/hotels/HotelCard";

const CategoryPage = () => {
  const { id } = useParams();

  const [category, setCategory] = useState<CategoryType>();

  useEffect(() => {
    fetch(
      `https://ef9fb2cd-6655-408c-9f86-95b407cafeaf.mock.pstmn.io/categories/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategory(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <MainLayout>
      <img src={category?.icon} alt={category?.title} />
      <p>{category?.description}</p>
      <h5>Hotels</h5>
      {category?.hotels.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </MainLayout>
  );
};

export default CategoryPage;
