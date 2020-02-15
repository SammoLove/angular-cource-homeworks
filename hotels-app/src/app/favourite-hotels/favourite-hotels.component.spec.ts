import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteHotelsComponent } from './favourite-hotels.component';

describe('FavouriteHotelsComponent', () => {
  let component: FavouriteHotelsComponent;
  let fixture: ComponentFixture<FavouriteHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
