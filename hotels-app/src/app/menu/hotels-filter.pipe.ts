import {Pipe, PipeTransform} from "@angular/core";
import {IHotel} from "../shared/IHotel";

@Pipe({name: 'hotelsPipe'})
export class HotelsPipe implements PipeTransform {
  transform(hotels: IHotel[], hotelNameSearchString: string): IHotel[] {
    console.log(hotelNameSearchString);
    if (hotelNameSearchString) {
      return hotels.filter(hotel => hotel.title.toLocaleLowerCase().includes(hotelNameSearchString)
        || hotel.address.toLocaleLowerCase().includes(hotelNameSearchString)
        || hotel.description.toLocaleLowerCase().includes(hotelNameSearchString));
    } else {
      return hotels;
    }
  }
}
