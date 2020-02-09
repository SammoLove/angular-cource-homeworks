import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from "../shared/IHotel";

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  //Компонент Menu помещает значение данных в принадлежащее ему свойство hotel и передает его компоненту HotelItem
  //чисто для наполения данными и отображения
  @Input() public hotel: IHotel;

  //тупая карточка

  ngOnInit() {
  }
}
