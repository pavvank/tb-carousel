import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbCarouselStackedCardComponent } from './carousel-stacked-card.component';

describe('TbCarouselStackedCardComponent', () => {
  let component: TbCarouselStackedCardComponent;
  let fixture: ComponentFixture<TbCarouselStackedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbCarouselStackedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbCarouselStackedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
