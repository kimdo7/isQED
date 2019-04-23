import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingModalForms } from '../../landing-modal/landing-modal-forms';
import { LandingModalValidationErrors } from '../../landing-modal/landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';

@Component({
    selector: 'app-resest-password',
    templateUrl: './resest-password.component.html',
    styleUrls: ['./resest-password.component.scss']
})
export class ResestPasswordComponent implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    validation_messages = LandingModalValidationErrors.message
    passwordStrengthValidator = PasswordStrengthValidator
    hidePassword1 = true
    hidePassword2 = true

    attempt = 0

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['login_id'])
        });

        var tempCode = "123456"

        this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
        this.secondFormGroup = LandingModalForms.init_reset_password()
    }

    resendPasscodeViaEmail() {

    }

    onSubmit() {
        alert("here")
    }

    onActivationCodeChange(newInput: string) {
        if (newInput.length == 6){
            this.attempt += 1
        }
    }
}


