import { Injectable } from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {MessageService} from "./message.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HotelsService { // по сути хрпнилище или провайдер текущего состояния

  private _selectedHotel$: Observable<IHotel>;

  private _favouriteHotels$: Observable<IHotel[]>;
  private _favouriteHotels: IHotel[];

  constructor(private messageService: MessageService) { }


  get selectedHotel$(): Observable<IHotel> {
    return this._selectedHotel$;
  }

  set selectedHotel$(value: Observable<IHotel>) {
    this.messageService.add('DaraService: fetched hotels');
    this._selectedHotel$ = value;
  }

  get favouriteHotels$(): Observable<IHotel[]> {
    return this._favouriteHotels$;
  }

  addFavouriteHotels$(hotel: IHotel) {
    this.messageService.add('DaraService: fetched hotels');
    //this._favouriteHotels$.next(hotel);
    this._favouriteHotels.push(hotel);
  }
}
