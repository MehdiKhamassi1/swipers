import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticatroposComponent } from './staticatropos.component';

describe('StaticatroposComponent', () => {
  let component: StaticatroposComponent;
  let fixture: ComponentFixture<StaticatroposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticatroposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticatroposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
