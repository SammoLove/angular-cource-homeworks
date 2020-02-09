import {IHotel} from "./IHotel";

export interface IFavouriteHotel extends IHotel {
  voted: number;
}
