import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
    selector: 'app-forgot-password-modal',
    templateUrl: './forgot-password-modal.component.html',
    styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {
    action = new Subject();

    constructor(public modalRef: MDBModalRef) { }

    ngOnInit() {
    }

    openRegisterModal() {
        this.action.next('Register');
    }

    openLogInModal() {
        this.action.next('Log In');
    }
}
