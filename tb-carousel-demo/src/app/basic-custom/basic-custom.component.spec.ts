import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCustomComponent } from './basic-custom.component';

describe('BasicCustomComponent', () => {
  let component: BasicCustomComponent;
  let fixture: ComponentFixture<BasicCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
