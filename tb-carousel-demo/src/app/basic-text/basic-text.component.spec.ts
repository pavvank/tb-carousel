import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTextComponent } from './basic-text.component';

describe('BasicTextComponent', () => {
  let component: BasicTextComponent;
  let fixture: ComponentFixture<BasicTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
