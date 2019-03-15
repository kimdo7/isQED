import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteeringCommiteeComponent } from './steering-commitee.component';

describe('SteeringCommiteeComponent', () => {
  let component: SteeringCommiteeComponent;
  let fixture: ComponentFixture<SteeringCommiteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteeringCommiteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteeringCommiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
