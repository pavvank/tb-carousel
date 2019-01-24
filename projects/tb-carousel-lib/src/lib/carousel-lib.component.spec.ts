import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbCarouselLibComponent } from './carousel-lib.component';

describe('TbCarouselLibComponent', () => {
  let component: TbCarouselLibComponent;
  let fixture: ComponentFixture<TbCarouselLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbCarouselLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbCarouselLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
