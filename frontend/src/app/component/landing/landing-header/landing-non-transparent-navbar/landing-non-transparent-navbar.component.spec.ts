import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNonTransparentNavbarComponent } from './landing-non-transparent-navbar.component';

describe('LandingNonTransparentHeaderComponent', () => {
  let component: LandingNonTransparentNavbarComponent;
  let fixture: ComponentFixture<LandingNonTransparentNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNonTransparentNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNonTransparentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
