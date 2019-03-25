import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInValidationComponent } from './sign-in-validation.component';

describe('SignInValidationComponent', () => {
  let component: SignInValidationComponent;
  let fixture: ComponentFixture<SignInValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
