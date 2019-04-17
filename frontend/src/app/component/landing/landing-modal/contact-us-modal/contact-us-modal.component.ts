import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';

@Component({
    selector: 'app-contact-us-modal',
    templateUrl: './contact-us-modal.component.html',
    styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements OnInit {

    constructor(public modalRef: MDBModalRef) { }

    ngOnInit() {
    }

    onSubmit(){
        this.modalRef.hide()
    }
}
