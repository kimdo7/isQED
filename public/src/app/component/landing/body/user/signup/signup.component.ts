import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../user_validation_message';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    validation_messages = UserValidatorMessage.message
    hide: boolean = true
    showErrors: boolean = false
    user_form: FormGroup

    /**
     * 
     * @param formBuilder 
     * @param userService 
     * @param router 
     */
    constructor(
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
        if (this.user_form.invalid) {
            this.showDangerMessage("Error!!! Please confirm email and password")
            return;
        }

        let tempObservable = this.userService.register(this.user_form.value)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                this.router.navigate(["/signin/validation/" + data["id"]])
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
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],
            last_name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],

            email: ['', [Validators.required, Validators.email]],
            password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
                ]
            ],
            confirm_password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
                ]
            ],
        })
    }


    getPasswordStrength() {
        var match = 0;
        var password = this.user_form.value.password
        /**
         * Match lower case
         */
        if (this.isContatinLowerCase(password))
            match += 20

        /**
         * Match upper case
         */
        if (this.isContatinUpperCase(password))
            match += 20

        /**
         * Match digit
         */
        if (this.isContatinDigitCase(password))
            match += 20

        /**
         * Match speicail character
         */
        if (this.isContatinSpecialCase(password))
            match += 20

        /**
         * Length
         */
        if (this.isMinLength(password))
            match += 20

        return match;
    }

    isContatinLowerCase(password) {
        return password.match(/[a-z]/g)
    }

    isContatinUpperCase(password) {
        return password.match(/[A-Z]/g)
    }

    isContatinDigitCase(password) {
        return password.match(/[0-9]/g)
    }

    isContatinSpecialCase(password) {
        return password.match(/[$@$!%*?&]/g)
    }

    isMinLength(password) {
        return password.length >= 8
    }

    getPasswordColor() {
        return (this.getPasswordStrength() == 100) ? "priamry" : "warn"
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

}

