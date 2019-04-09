import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsqedEventsComponent } from './isqed-events.component';

describe('IsqedEventsComponent', () => {
  let component: IsqedEventsComponent;
  let fixture: ComponentFixture<IsqedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsqedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsqedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
