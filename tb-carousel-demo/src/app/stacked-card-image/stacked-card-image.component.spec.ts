import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedCardImageComponent } from './stacked-card-image.component';

describe('StackedCardImageComponent', () => {
  let component: StackedCardImageComponent;
  let fixture: ComponentFixture<StackedCardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedCardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
