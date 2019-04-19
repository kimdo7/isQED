import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHomeCardComponent } from './landing-home-card.component';

describe('LandingHomeCardComponent', () => {
  let component: LandingHomeCardComponent;
  let fixture: ComponentFixture<LandingHomeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingHomeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
