import { ChangeEvent, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface MyState {
  rooms: TApiReturnRooms[];
  sortedRooms: TApiReturnRooms[];
  featuredRooms: TApiReturnRooms[];
  loading: boolean;
  type: string;
  capacity: number;
  price: number;
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  breakfast: boolean;
  pets: boolean;
}
export interface IApiContext extends MyState {
  getRoom: (slug: string) => TApiReturnRooms[] | any;
  handleChange: (event: ChangeEvent | any) => void;
}
export interface IApiBooleanReturn {
  [reFeaturedRoom: string]: boolean;
}
export interface IApiNumberReturn {
  [rePrice: string]: number;
}
export interface IApiStringReturn {
  [reText: string]: string;
}

export type TApiReturnRooms =
  | IApiBooleanReturn
  | IApiNumberReturn
  | IApiStringReturn;
