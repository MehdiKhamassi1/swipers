import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverflowsliderComponent } from './coverflowslider.component';

describe('CoverflowsliderComponent', () => {
  let component: CoverflowsliderComponent;
  let fixture: ComponentFixture<CoverflowsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverflowsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverflowsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
