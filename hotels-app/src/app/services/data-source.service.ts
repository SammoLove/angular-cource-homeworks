import {Injectable} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {delay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private messageService: MessageService,
              private http: HttpClient) {
  }

  public get hotels(): Observable<IHotel[]> {
    this.messageService.add('DaraService: fetched hotels');
    return this.hotels$;
  }

  //private hotels$: Observable<IHotel[]> = of(DataSourceService.mockedHotels).pipe(delay(2000));

  private hotels$: Observable<IHotel[]> = this.http.get<IHotel[]>("http://localhost:3000/hotels").pipe(delay(1000));

  private static mockedHotels: IHotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather: {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather: {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather: {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    }
  ];
}
