import {Pipe, PipeTransform} from "@angular/core";
import {IHotel} from "../shared/IHotel";

@Pipe({name: 'starsPipe'})
export class StarsPipe implements PipeTransform {
  transform(hotels: IHotel[], stars: number): IHotel[] {
    console.log(stars);
    if (stars) {
      return hotels.filter(hotel => hotel.stars == stars);
    } else {
      return hotels;
    }
  }
}
