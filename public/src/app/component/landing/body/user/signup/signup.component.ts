import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../user_validation_message';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    validation_messages = UserValidatorMessage.message
    hide: boolean = true

    user_form: FormGroup

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initForm()
    }

    onRegister() {
        if (this.user_form.invalid) {
            return;
        }
        alert('SUCCESS!! :-)')
    }


    initForm() {
        this.user_form = this.formBuilder.group({
            first_name: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern('^[A-Za-z ]+$')]
            ],
            last_name: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.pattern('^[A-Za-z ]+$')]
            ],

            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirm_password: ['', [Validators.required, Validators.minLength(8)]],
            // phone: ['', [
            //     Validators.required,
            //     Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
            // ]],


        }, (formGroup: FormGroup) => {
            return PasswordValidator.areEqual(formGroup);
        });
    }

}
