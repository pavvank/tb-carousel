import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDComponent } from './three-d.component';

describe('ThreeDComponent', () => {
  let component: ThreeDComponent;
  let fixture: ComponentFixture<ThreeDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
