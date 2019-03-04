import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCustomComponent } from './three-d-custom.component';

describe('ThreeDCustomComponent', () => {
  let component: ThreeDCustomComponent;
  let fixture: ComponentFixture<ThreeDCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
