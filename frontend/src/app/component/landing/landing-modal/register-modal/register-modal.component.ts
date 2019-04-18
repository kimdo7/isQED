import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/service/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidatorMessage } from 'src/app/validator/user_validation_message';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';

// https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
    action = new Subject();

    validation_messages = UserValidatorMessage.message
    passwordStrengthValidator = PasswordStrengthValidator

    hidePassword: boolean = true
    hideErrors: boolean = true
    user_form: FormGroup

    /**
     * 
     * @param formBuilder 
     * @param userService 
     * @param router 
     */

    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
        ) { }

    /**
     * @param user_form *init*
     * @param alert *init*
     */
    ngOnInit() {
        this.initForm()
        this.initAlert()
    }

    /**
     * *Validation*
     * @register account
     * @alert if failure
     * @navigate to validation acount that sent by email
     */
    onRegister() {
        console.log("onRegister")
        // if (this.user_form.invalid) {
        //         // showDangerMessage shows up on the webpage.
        //         this.showDangerMessage("Error!!! Please confirm email and password")
        //     return;
        // }
        console.log("onRegister: valid form")
        var crash = null;
        crash.something();
        let tempObservable = this.userService.register(this.user_form.value)
        tempObservable.subscribe(data => {
            console.log("onRegister: userService returned %o", data)
            if (!data) {
                this.showDangerMessage("Error!!! Server not available. Please try later.")
            } if (data["message"] === "Success") {
                this.router.navigate(["/signin/validation/" + data["login_id"]])
            } else if (data["error"]) {
                this.showDangerMessage("Error!!! " + data["error"])
            } else {
                this.showDangerMessage("Error!!! Please confirm email and password")
            }
        });
    }

        /**
     * @param first_name  minLength : 2, pattern check
     * @param last_name minLength : 2, pattern check
     * @param email validation check
     * @param password validation check
     * @param confirm_password validation check
     * 
     * @PasswordStrength 
        * *At least 8 characters in length*
        * *Lowercase letters*
        * *Uppercase letters*
        * *Numbers*
        * *Special characters*
     */
    initForm() {
        this.user_form = this.formBuilder.group({
            first_name: ['',
                [
                    //Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],
            last_name: ['',
                [
                    //Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],

            email: ['', [Validators.required, Validators.email]],
            password: ['',
                [
                    //Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
                ]
            ],
        })
    }

    /**
     * alert
     */

    private _danger = new Subject<string>();

    staticAlertClosed = false;
    errorMessage: string;

    public showDangerMessage(message) {
        this._danger.next(message);
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

    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    openLogInModal() {
        this.action.next('Log In');
    }
}
