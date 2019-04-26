import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/service/user/user.service';
import { LoginService } from 'src/app/service/user/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LandingModalForms } from '../landing-modal-forms';
import { LandingModalValidationErrors } from '../landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';
import { LoginInfo } from 'src/app/object/LoginInfo';


// https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
    /**
     * @param action swap components
     * @param register_form contains first, last name email and password
     * @param validation_messages error messages for form
     * @param passwordStrengthValidator password strength hint message
     * @param hidePassword hide or display password
     */

    action = new Subject();
    register_form: FormGroup
    validation_messages = LandingModalValidationErrors.message
    passwordStrengthValidator = PasswordStrengthValidator
    hidePassword = true

    /**
     * *ERROR* @Alert variables
     */
    private _danger = new Subject<string>();
    staticAlertClosed = false;
    errorMessage: string;

    /**
     * @param modalRef current modal
     * @param formBuilder to build form
     * @param userService to connect to service (api)
     * @param loginService to connect to service (api)
     * @param router to navigate to
     */
    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private loginService: LoginService,
        private router: Router
    ) { }

    /**
     * @param user_form *init*
     * @param alert *init*
     */
    ngOnInit() {
        this.register_form = LandingModalForms.init_register_form(this.formBuilder)
        this.initAlert()
    }

    /**
     * *Validation*
     * @register account
     * @alert if failure
     * @navigate to validation acount that sent by email
     */
    onRegister() {
        /**
         * @Validation FRONTEND
         */
        if (this.register_form.invalid) {
            this.showDangerMessage("Error!!! Please confirm email and password")
            return
        }

        this.userService.register(this.register_form.value, (err, loginInfo) => {
            if (err) {
                this.showDangerMessage("Error!!! " + err)
                return
            }

            if (!loginInfo) {
                this.showDangerMessage("Error!!! Server not available. Please try later.")
                return
            } 
            // Success
            this.action.next('Registered')
            this.router.navigate(["/user"])
        });
    }


    /**
     * *init alert*
     * set alert to *10s*
     */
    initAlert() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._danger.subscribe((message) => this.errorMessage = message);
        this._danger.pipe(
            debounceTime(10000)
        ).subscribe(() => this.errorMessage = null);
    }

    public showDangerMessage(message) {
        this._danger.next(message);
    }

    /**
     * @swap to modal *passwowrd*
     */
    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    /**
     * @swap to modal *register*
     */
    openLogInModal() {
        this.action.next('Log In');
    }
}
