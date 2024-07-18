import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipsliderComponent } from './flipslider.component';

describe('FlipsliderComponent', () => {
  let component: FlipsliderComponent;
  let fixture: ComponentFixture<FlipsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
