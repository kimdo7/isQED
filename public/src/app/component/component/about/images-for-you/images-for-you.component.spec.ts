import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesForYouComponent } from './images-for-you.component';

describe('ImagesForYouComponent', () => {
  let component: ImagesForYouComponent;
  let fixture: ComponentFixture<ImagesForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
