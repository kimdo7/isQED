import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEventComponent } from './landing-event.component';

describe('LandingEventComponent', () => {
  let component: LandingEventComponent;
  let fixture: ComponentFixture<LandingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
