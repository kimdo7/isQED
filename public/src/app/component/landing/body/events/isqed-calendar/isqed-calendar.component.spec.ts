import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsqedCalendarComponent } from './isqed-calendar.component';

describe('IsqedCalendarComponent', () => {
  let component: IsqedCalendarComponent;
  let fixture: ComponentFixture<IsqedCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsqedCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsqedCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
