import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselThreeDComponent } from './carousel-three-d.component';

describe('CarouselThreeDComponent', () => {
  let component: CarouselThreeDComponent;
  let fixture: ComponentFixture<CarouselThreeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselThreeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
