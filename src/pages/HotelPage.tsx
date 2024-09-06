import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import { HotelDataType } from "../types/Hotel";
import hotelService from "../services/hotelService";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState<HotelDataType>();

  useEffect(() => {
    hotelService.getHotel(id).then((data) => setHotel(data));
  }, [id]);

  // تابع برای نمایش آیکون‌های ستاره بر اساس امتیاز
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} style={{ color: "#FFD700" }} />);
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "#FFD700" }} />);
      }
    }
    return stars;
  };

  return (
    <MainLayout>
      <img src={hotel?.image_url} alt={hotel?.name} />
      <h1>{hotel?.name}</h1>
      <p>{hotel?.address}</p>
      <div>{hotel?.rating && renderRatingStars(hotel.rating)}</div>
      <p>{hotel?.price_per_night}</p>
      <p>{hotel?.description}</p>
    </MainLayout>
  );
};

export default HotelPage;
