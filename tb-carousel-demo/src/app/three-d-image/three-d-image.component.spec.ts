import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDImageComponent } from './three-d-image.component';

describe('ThreeDImageComponent', () => {
  let component: ThreeDImageComponent;
  let fixture: ComponentFixture<ThreeDImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
