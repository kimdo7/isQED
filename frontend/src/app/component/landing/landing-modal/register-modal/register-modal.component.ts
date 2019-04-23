import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/service/user/user.service';
import { LoginService, LoginInfo } from 'src/app/service/user/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LandingModalForms } from '../landing-modal-forms';
import { LandingModalValidationErrors } from '../landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';


// https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
    register_form: FormGroup
    validation_messages = LandingModalValidationErrors.message
    passwordStrengthValidator = PasswordStrengthValidator
    hidePassword = true
    action = new Subject();
    /**
    * alert
    */

    private _danger = new Subject<string>();
    staticAlertClosed = false;
    errorMessage: string;

    // validation_messages = UserValidatorMessage.message
    // passwordStrengthValidator = PasswordStrengthValidator    

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
        console.log("onRegister")
        if (this.register_form.invalid) {
            //         // showDangerMessage shows up on the webpage.
            console.log(this.register_form.value)
            this.showDangerMessage("Error!!! Please confirm email and password")
            return;
        }
        console.log("onRegister: valid form")
        let tempObservable = this.userService.register(this.register_form.value)
        tempObservable.subscribe(data => {
            console.log("onRegister: userService returned %o", data)
            if (!data) {
                console.log("server not available")
                this.showDangerMessage("Error!!! Server not available. Please try later.")
            } if (data["message"] === "Success") {
                var loginInfo: LoginInfo = data["data"]
                // We are logged in
                this.loginService.changeLoginInfo(loginInfo)
                // Just trying to get the UI to start showing the right thing
                this.action.next('Registered');
            } else if (data["error"]) {
                console.log("Error!!! " + data["error"])
                this.showDangerMessage("Error!!! " + data["error"])
            } else {
                console.log("Error!!! Please confirm email and password")
                this.showDangerMessage("Error!!! Please confirm email and password")
            }
        });
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

    /**
     * Swap modal to Forgot password
     */
    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    /**
     * Swap modal to LogIn
     */
    openLogInModal() {
        this.action.next('Log In');
    }

    public showDangerMessage(message) {
        this._danger.next(message);
    }


}
