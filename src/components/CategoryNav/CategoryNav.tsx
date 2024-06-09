import { Tabs, Tooltip } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import CategoryItem from "./CategoryItem";
import CabinIcon from "@mui/icons-material/Cabin";
import SailingIcon from "@mui/icons-material/Sailing";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PoolIcon from "@mui/icons-material/Pool";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import MosqueIcon from "@mui/icons-material/Mosque";
import ParkIcon from "@mui/icons-material/Park";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import ReviewsIcon from "@mui/icons-material/Reviews";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import DeckIcon from "@mui/icons-material/Deck";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import ApartmentIcon from "@mui/icons-material/Apartment";

const CategoryNav = () => {
  const categories = [
    {
      id: 1,
      title: "Hotel",
      description: "Find and book the best hotels for your stay.",
      icon: <HotelIcon />,
    },
    {
      id: 2,
      title: "Cabin",
      description: "Experience cozy and rustic cabin stays.",
      icon: <CabinIcon />,
    },
    {
      id: 3,
      title: "Sailing",
      description: "Enjoy sailing adventures on beautiful waters.",
      icon: <SailingIcon />,
    },
    {
      id: 4,
      title: "Holiday Village",
      description: "Relax in a picturesque holiday village.",
      icon: <HolidayVillageIcon />,
    },
    {
      id: 5,
      title: "Swimming Pool",
      description: "Dive into our top swimming pool recommendations.",
      icon: <PoolIcon />,
    },
    {
      id: 6,
      title: "Flights",
      description: "Book flights to your favorite destinations.",
      icon: <AirplanemodeActiveIcon />,
    },
    {
      id: 7,
      title: "Mosque",
      description: "Discover beautiful mosques to visit.",
      icon: <MosqueIcon />,
    },
    {
      id: 8,
      title: "Parks",
      description: "Find the best parks for outdoor activities.",
      icon: <ParkIcon />,
    },
    {
      id: 9,
      title: "Room Service",
      description: "Enjoy the best room service during your stay.",
      icon: <RoomServiceIcon />,
    },
    {
      id: 10,
      title: "Reviews",
      description: "Read reviews from other travelers.",
      icon: <ReviewsIcon />,
    },
    {
      id: 11,
      title: "Sunny Weather",
      description: "Find destinations with sunny weather.",
      icon: <WbSunnyIcon />,
    },
    {
      id: 12,
      title: "Kitesurfing",
      description: "Experience the thrill of kitesurfing.",
      icon: <KitesurfingIcon />,
    },
    {
      id: 13,
      title: "Parking",
      description: "Locate convenient parking spots.",
      icon: <LocalParkingIcon />,
    },
    {
      id: 14,
      title: "Restaurants",
      description: "Discover the best places to dine.",
      icon: <RestaurantIcon />,
    },
    {
      id: 15,
      title: "Food Delivery",
      description: "Get food delivered to your location.",
      icon: <DeliveryDiningIcon />,
    },
    {
      id: 16,
      title: "Cafes",
      description: "Explore cozy cafes nearby.",
      icon: <LocalCafeIcon />,
    },
    {
      id: 17,
      title: "Bars",
      description: "Find popular bars for a night out.",
      icon: <LocalBarIcon />,
    },
    {
      id: 18,
      title: "Deck",
      description: "Relax and unwind on a deck.",
      icon: <DeckIcon />,
    },
    {
      id: 19,
      title: "Breakfast",
      description: "Enjoy a delicious breakfast at these spots.",
      icon: <BreakfastDiningIcon />,
    },
    {
      id: 20,
      title: "Apartments",
      description: "Find comfortable apartments for your stay.",
      icon: <ApartmentIcon />,
    },
  ];
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
