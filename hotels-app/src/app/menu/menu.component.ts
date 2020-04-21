import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {DataSourceService} from '../services/data-source.service';
import {Observable, Subscription} from "rxjs";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //private hotels: IHotel[];
  private hotels$: Observable<IHotel[]>;
  private subscription: Subscription;


  constructor(private dataService: DataSourceService,
              private messageService: MessageService) {
  }

  @Input() stars: number;

  @Input() hotelNameSearchString: string;

  @Output() public hotelClicked: EventEmitter<IHotel> = new EventEmitter();
  selectedHotelPhoto: string;

  onHotelSelected(hotel: IHotel): void {
    this.hotelClicked.emit(hotel);
    this.selectedHotelPhoto = hotel.picture
    this.messageService.add(`Menu: Selected hotel id=${hotel.id}`);
  }

  @Output() private favouriteEmitter: EventEmitter<IHotel> = new EventEmitter<IHotel>();

  ngOnInit() {
    //this.getHotels();
    this.hotels$ = this.dataService.hotels;
    this.subscription = this.hotels$.subscribe(hotels => {
      //console.log("hotels: " + this.hotels.length);
      this.hotelClicked.emit(hotels[0]);
      this.selectedHotelPhoto = hotels[0].picture;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
