import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicImageComponent } from './basic-image.component';

describe('BasicImageComponent', () => {
  let component: BasicImageComponent;
  let fixture: ComponentFixture<BasicImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
