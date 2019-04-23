import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LandingModalForms } from '../landing-modal-forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LandingModalValidationErrors } from '../landing-modal-validations-errors';

@Component({
    selector: 'app-contact-us-modal',
    templateUrl: './contact-us-modal.component.html',
    styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements OnInit {

    contact_form: FormGroup
    validation_messages = LandingModalValidationErrors.message
    /**
    * alert
    */

    private _danger = new Subject<string>();
    staticAlertClosed = false;
    errorMessage: string;

    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.contact_form = LandingModalForms.init_contact_us_form(this.formBuilder)
        this.initAlert()
    }

    onSubmit() {
        console.log(this.contact_form.value)
        if (this.contact_form.invalid) {
            this.showDangerMessage("Error!!! Please confirm email and password")
            return
        }
        this.modalRef.hide()
    }

    /**
     * set alert
     */
    initAlert() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._danger.subscribe((message) => this.errorMessage = message);
        this._danger.pipe(
            debounceTime(5000)
        ).subscribe(() => this.errorMessage = null);
    }

    public showDangerMessage(message) {
        this._danger.next(message);
    }
}
