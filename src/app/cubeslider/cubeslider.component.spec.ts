import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubesliderComponent } from './cubeslider.component';

describe('CubesliderComponent', () => {
  let component: CubesliderComponent;
  let fixture: ComponentFixture<CubesliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubesliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
