import React from "react";
import MainLayout from "../Layouts/MainLayout";
import { HotelDataType } from "../types/Hotel";
import { useEffect, useState } from "react";
import HotelCard from "../components/hotels/HotelCard";
import { Grid } from "@mui/material";
import hotelService from "../services/hotelService";

const HomePage = () => {
  const [hotels, setHotels] = useState<HotelDataType[]>([]);

  useEffect(() => {
    // fetch(`https://8360a879-7c37-4ae4-9176-db6fb4566627.mock.pstmn.io/hotels`)
    //   .then((response) => response.json())
    //   .then((data) => { setHotels(data) })
    //   .catch((error) => console.log(error));
    hotelService.getAllHotels().then((data) => setHotels(data));
  }, []);

  return (
    <MainLayout>
      <Grid
        container
        spacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {hotels?.length > 0 ? (
          hotels.map((item) => <HotelCard key={item.id} {...item} />)
        ) : (
          <p> NO HOTEL</p>
        )}
      </Grid>
    </MainLayout>
  );
};

export default HomePage;
