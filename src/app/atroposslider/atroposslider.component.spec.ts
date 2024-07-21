import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtropossliderComponent } from './atroposslider.component';

describe('AtropossliderComponent', () => {
  let component: AtropossliderComponent;
  let fixture: ComponentFixture<AtropossliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtropossliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtropossliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
