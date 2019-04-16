import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../landing-modal/log-in/log-in-modal.component';
import { RegisterModalComponent } from '../landing-modal/register-modal/register-modal.component';


@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

    logIn_modalRef: MDBModalRef;

    lastScrollTop = 0;

    constructor(
        private modalService: MDBModalService
    ) { }

    ngOnInit() {
    }


    openLoginModal() {
        this.logIn_modalRef = this.modalService.show(LogInModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered',
            containerClass: 'right',
            animated: true
        });
    }

    openRegisterModal() {
        this.logIn_modalRef = this.modalService.show(RegisterModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered',
            containerClass: 'right',
            animated: true
        });
    }

}
