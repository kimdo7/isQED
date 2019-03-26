import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInDefaultComponent } from './sign-in-default.component';

describe('SignInDefaultComponent', () => {
    let component: SignInDefaultComponent;
    let fixture: ComponentFixture<SignInDefaultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignInDefaultComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInDefaultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
