import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-us-modal',
    templateUrl: './contact-us-modal.component.html',
    styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements OnInit {

    // form_group : FormGroup

    constructor(
        public modalRef: MDBModalRef,
        // private formBuilder: FormBuilder,
        ) { }

    ngOnInit() {
        // this.form_group = this.formBuilder.group({
        //     first_name: ['',
        //         [
        //             Validators.required,
        //             Validators.minLength(2),
        //             Validators.pattern('^[A-Za-z ]+$')
        //         ]
        //     ],
        //     last_name: ['',
        //         [
        //             Validators.required,
        //             Validators.minLength(2),
        //             Validators.pattern('^[A-Za-z ]+$')
        //         ]
        //     ],

        //     email: ['', [Validators.required, Validators.email]],
        //     password: ['',
        //         [
        //             Validators.required,
        //             Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
        //         ]
        //     ],
        // })
    }

    onSubmit(){
        this.modalRef.hide()
    }
}
