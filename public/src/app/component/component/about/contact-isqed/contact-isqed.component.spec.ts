import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIsqedComponent } from './contact-isqed.component';

describe('ContactIsqedComponent', () => {
  let component: ContactIsqedComponent;
  let fixture: ComponentFixture<ContactIsqedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactIsqedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactIsqedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
