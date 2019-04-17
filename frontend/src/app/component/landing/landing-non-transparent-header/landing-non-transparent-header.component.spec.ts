import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNonTransparentHeaderComponent } from './landing-non-transparent-header.component';

describe('LandingNonTransparentHeaderComponent', () => {
  let component: LandingNonTransparentHeaderComponent;
  let fixture: ComponentFixture<LandingNonTransparentHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNonTransparentHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNonTransparentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
