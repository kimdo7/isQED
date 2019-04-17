import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
    action = new Subject();

    constructor(public modalRef: MDBModalRef) { }

    ngOnInit() {
    }

    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    openLogInModal() {
        this.action.next('Log In');
    }


}
