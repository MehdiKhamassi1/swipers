import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadesliderComponent } from './fadeslider.component';

describe('FadesliderComponent', () => {
  let component: FadesliderComponent;
  let fixture: ComponentFixture<FadesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadesliderComponent ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
