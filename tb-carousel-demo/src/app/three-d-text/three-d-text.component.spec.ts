import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDTextComponent } from './three-d-text.component';

describe('ThreeDTextComponent', () => {
  let component: ThreeDTextComponent;
  let fixture: ComponentFixture<ThreeDTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
