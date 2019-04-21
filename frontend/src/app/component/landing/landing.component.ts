import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ContactUsModalComponent } from './landing-modal/contact-us-modal/contact-us-modal.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    modalRef: MDBModalRef;

    constructor(private modalService: MDBModalService) {
    }

    ngOnInit() {
    }

    openContactUsModal() {
        this.modalRef = this.modalService.show(ContactUsModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-side modal-bottom-right',
            containerClass: 'right',
            animated: true
        });
    }

   

}
