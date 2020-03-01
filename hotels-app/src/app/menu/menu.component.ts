import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";
import {DataSourceService} from '../services/data-source.service';
import {Observable} from "rxjs";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private hotels: IHotel[];

  constructor(private dataService: DataSourceService,
              private messageService: MessageService) {
  }

  private getHotels(): void {
    this.dataService.hotels.subscribe(hotels => this.hotels = hotels);
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
    this.getHotels();
    this.dataService.hotels.subscribe(hotels => {
      console.log("hotels: " + this.hotels.length);
      this.hotelClicked.emit(this.hotels[0]);
      this.selectedHotelPhoto = this.hotels[0].picture;
    });
  }
}
