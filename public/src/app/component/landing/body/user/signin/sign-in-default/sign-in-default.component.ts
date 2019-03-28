import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../../user_validation_message';

@Component({
    selector: 'app-sign-in-default',
    templateUrl: './sign-in-default.component.html',
    styleUrls: ['./sign-in-default.component.css']
})
export class SignInDefaultComponent implements OnInit {

    user_form: FormGroup
    validation_messages = UserValidatorMessage.message
    hide: boolean = true

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initUserForm()
    }

    initUserForm() {
        this.user_form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    onSignIn() {
        // this.submitted = true;

        // stop here if form is invalid
        if (this.user_form.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }

	/**
	 * *Validation  Message*
	 */

}
