import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsActivateModalComponent } from './is-activate-modal.component';

describe('IsActivateModalComponent', () => {
  let component: IsActivateModalComponent;
  let fixture: ComponentFixture<IsActivateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsActivateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsActivateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
