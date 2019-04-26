import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LandingModalForms } from '../landing-modal-forms';
import { LoginService } from 'src/app/service/user/login.service';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LandingModalValidationErrors } from '../landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {
    /**
     * @param action swap components
     * @param login_form contains email and password
     * @param validation_messages error messages for form
     * @param passwordStrengthValidator password strength hint message
     * @param hidePassword hide or display password
     */
    action = new Subject();
    login_form: FormGroup;
    validation_messages = LandingModalValidationErrors.message;
    passwordStrengthValidator = PasswordStrengthValidator;
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
     * @param loginService to connect to service (api)
     * @param router to navigate to
     */
    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ) { }

    /**
     * *init*
     * @param alert
     * @param login_form
     */
    ngOnInit() {
        this.initAlert();
        this.login_form = LandingModalForms.init_login_form(this.formBuilder)
    }

    /**
     * *Validation*
     * @login account
     * @alert if failure
     * @navigate to validation acount that sent by email
     */
    onLogin() {
        /**
         * @Validation FRONTEND
         */
        if (this.login_form.invalid) {
            this.showDangerMessage("Error! Please check your email and password")
            return
        }
        /**
         * When we do the login info, you don't need to subscribe here.  
         * We call the loginInfo to get the info. 
         * We need it because the loginService is saving it in localStorage
         * whenever it gets a new value back.
         */
        this.loginService.login(this.login_form.value, (err, loginInfo) => {

            /**
             * @valid -> *send user to user homepage*
             * @invalid -> *display error message for 10 seconds*
             */
            if (loginInfo) {
                this.router.navigate(["/user"])
                this.modalRef.hide()
            } else {
                this.showDangerMessage("Error! Please check your email and password.");
            }
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

    /**
     * 
     * @param message display the error message
     */
    public showDangerMessage(message) {
        this._danger.next(message);
    }

    /**
     * @swap to modal *register*
     */
    openRegisterModal() {
        this.action.next('Register');
    }

    /**
     * @swap to modal *passwowrd*
     */
    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }
}

