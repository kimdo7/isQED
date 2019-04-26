import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCertificationComponent } from './landing-certification.component';

describe('LandingCertificationComponent', () => {
  let component: LandingCertificationComponent;
  let fixture: ComponentFixture<LandingCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
