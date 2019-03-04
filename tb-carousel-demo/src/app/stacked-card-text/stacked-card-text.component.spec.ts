import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedCardTextComponent } from './stacked-card-text.component';

describe('StackedCardTextComponent', () => {
  let component: StackedCardTextComponent;
  let fixture: ComponentFixture<StackedCardTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedCardTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedCardTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
