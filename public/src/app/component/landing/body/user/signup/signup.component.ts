import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../user_validation_message';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    validation_messages = UserValidatorMessage.message
    hide: boolean = true

    user_form: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.initForm()
    }

    onRegister() {
        if (this.user_form.invalid) {
            return;
        }

        let tempObservable = this.userService.register(this.user_form.value)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success"){
                this.router.navigate(["/signin/validation/"+data["data"]["_id"]])
            }else{

            }
            console.log("Got our tasks!", data)
        });
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
