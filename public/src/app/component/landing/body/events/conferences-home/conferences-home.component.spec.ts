import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesHomeComponent } from './conferences-home.component';

describe('ConferencesHomeComponent', () => {
  let component: ConferencesHomeComponent;
  let fixture: ComponentFixture<ConferencesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferencesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
