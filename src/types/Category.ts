import { HotelDataType } from "./Hotels";

export type CategoryType = {
  id: number;
  title: string;
  icon: string;
  description: string;
  hotels: HotelDataType[];
};

