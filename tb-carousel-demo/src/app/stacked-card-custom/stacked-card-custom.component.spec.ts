import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedCardCustomComponent } from './stacked-card-custom.component';

describe('StackedCardCustomComponent', () => {
  let component: StackedCardCustomComponent;
  let fixture: ComponentFixture<StackedCardCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedCardCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedCardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
