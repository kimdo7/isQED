import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsHomeComponent } from './awards-home.component';

describe('AwardsHomeComponent', () => {
  let component: AwardsHomeComponent;
  let fixture: ComponentFixture<AwardsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
