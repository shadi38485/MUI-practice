import { getNativeSelectUtilityClasses } from "@mui/material";
import axios from "axios";

const hotelService = {
  getAllHotels: async () => {
    try {
      const res = await axios.get(
        `https://8360a879-7c37-4ae4-9176-db6fb4566627.mock.pstmn.io/hotels`
      );
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getHotel: async (id?: string) => {
    try {
      const res = await axios.get(
        `https://8360a879-7c37-4ae4-9176-db6fb4566627.mock.pstmn.io/hotels/${id}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default hotelService;
