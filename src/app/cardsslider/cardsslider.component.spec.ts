import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardssliderComponent } from './cardsslider.component';

describe('CardssliderComponent', () => {
  let component: CardssliderComponent;
  let fixture: ComponentFixture<CardssliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardssliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
