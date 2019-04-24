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
            return;
        }

        let tempObservable = this.userService.register(this.register_form.value)
        tempObservable.subscribe(data => {
            if (!data) {
                //console.log("server not available")
                this.showDangerMessage("Error!!! Server not available. Please try later.")
            } if (data["message"] === "Success") {
                // userService doesn't update loginService. So we have to tell it what happened
                var loginInfo: LoginInfo = data["data"]
                this.loginService.changeLoginInfo(loginInfo)

                if (loginInfo.isEmailVerified) {
                    // This shouldn't happen because we just registered and haven't validated yet...
                    // But just in case 
                    this.action.next('Registered');
                    this.router.navigate(["/user"])
                } else {
                    // User has to enter the activation code
                    this.action.next('Registered');

                    // NOTE: After user registers, we send them to /user route.
                    //       Then user will go activate route after clicking the email link
                    this.router.navigate(["/user"])
                    // this.router.navigate(["/activate", loginInfo.login_id, ""])

                }
            } else if (data["error"]) {
                //console.log("Error!!! " + data["error"])
                this.showDangerMessage("Error!!! " + data["error"])
            } else {
                //console.log("Error!!! Please confirm email and password")
                this.showDangerMessage("Error!!! Please confirm email and password")
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
