import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    hidePassword = true

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['login_id'])
        });

        this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder)
        this.secondFormGroup = LandingModalForms.init_reset_password(this.formBuilder)
    }

    onVerifyCode(){

    }

    onResetPassword(){

    }
}


