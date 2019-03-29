import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../../user_validation_message';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-sign-in-default',
    templateUrl: './sign-in-default.component.html',
    styleUrls: ['./sign-in-default.component.css']
})
export class SignInDefaultComponent implements OnInit {

    user_form: FormGroup
    validation_messages = UserValidatorMessage.message
    hide: boolean = true

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.initUserForm()
        this.initAlert()
    }

    initUserForm() {
        this.user_form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });


    }

    onSignIn() {
        if (this.user_form.invalid) {
            return;
        }

        let tempObservable = this.userService.login(this.user_form.value)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                if (data["data"]["isActivate"]) {
                    this.router.navigate(["/learning"])
                } else {
                    this.router.navigate(["/signin/validation/" + data["data"]["_id"]])
                }
            } else {
                this.showDangerMessage("Error!!! Please check your email and password.")
            }
            console.log("Got our tasks!", data)
        });
    }


    /**
     * alert
     */


    private _danger = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;
    errorMessage: string;


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
