import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { Subject } from 'rxjs';


@Component({
    selector: 'app-log-in',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {
    action = new Subject();

    constructor(
        public modalRef: MDBModalRef,
        private modalService: MDBModalService
    ) { }

    ngOnInit() {
    }

    openRegisterModal() {
        this.action.next('Register');
    }

    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }
}
