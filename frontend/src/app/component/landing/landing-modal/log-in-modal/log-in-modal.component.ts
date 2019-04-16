import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {
    // modalRef: MDBModalRef;

    constructor(
        public modalRef: MDBModalRef,
        private modalService: MDBModalService
    ) { }

    ngOnInit() {
    }

    openRegisterModal() {
        this.modalRef = this.modalService.show(RegisterModalComponent, {
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
