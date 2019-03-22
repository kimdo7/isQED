import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateEventsComponent } from './affiliate-events.component';

describe('AffiliateEventsComponent', () => {
  let component: AffiliateEventsComponent;
  let fixture: ComponentFixture<AffiliateEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
