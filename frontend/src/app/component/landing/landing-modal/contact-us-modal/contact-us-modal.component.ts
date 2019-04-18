import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LandingModalForms } from '../landing-modal-forms';

@Component({
    selector: 'app-contact-us-modal',
    templateUrl: './contact-us-modal.component.html',
    styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements OnInit {

    contact_form: FormGroup

    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.contact_form =  LandingModalForms.init_contact_us_form(this.formBuilder)
    }

    onSubmit() {
        console.log(this.contact_form.value)
        this.modalRef.hide()
    }
}
