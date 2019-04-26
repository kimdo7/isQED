import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingModalForms } from '../../landing-modal/landing-modal-forms';
import { LandingModalValidationErrors } from '../../landing-modal/landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';
import { LoginInfo } from '../../../../object/LoginInfo';
import { LoginService } from 'src/app/service/user/login.service';


@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    validation_messages = LandingModalValidationErrors.message
    passwordStrengthValidator = PasswordStrengthValidator
    hidePassword1 = true
    hidePassword2 = true
    login_id = ""
    

    attempt = 0

    constructor(
        private _route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
    ) { }

    ngOnInit() {
        var tempCode = "";
        this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
        this.secondFormGroup = LandingModalForms.init_reset_password()

        this._route.params.subscribe((params: Params) => {
            this.login_id = params["login_id"]

            let tempObservable = this.loginService.tempActivationCodeVerification(this.login_id)
            tempObservable.subscribe(data => {

                if(data['message']=="Success"){
                    var tempCode = data["data"]
                    this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
                    this.secondFormGroup = LandingModalForms.init_reset_password()
                }

            });
        });
    }

    resendPasscodeViaEmail() {

    }

    onSubmit() {

        let tempObservable = this.loginService.replacePassword(this.login_id, this.firstFormGroup.value.code, this.secondFormGroup.value.password)
        tempObservable.subscribe(data => {
            if(data['message']=="Success"){
                console.log(data["data"]['email']);
                this.onLogin({
                    "email" : data["data"]['email'],
                    "password" : this.secondFormGroup.value.password
                })
            }
        })
    }

    onActivationCodeChange(newInput: string) {
        if (newInput.length == 6){
            this.attempt += 1
        }
    }

    /**
     * *Validation*
     * @login account
     * @alert if failure
     * @navigate to validation acount that sent by email
     */
    onLogin(data) {
    
        /**
         * When we do the login info, you don't need to subscrib here.  
         * We call the loginInfo to get the info. 
         * We need it because the loginService is saving it in localStorage
         * whenever it gets a new value back.
         */
        this.loginService.login(data, (err, loginInfo) => {

            /**
             * @valid -> *send user to user homepage*
             * @invalid -> *display error message for 10 seconds*
             */
            if (loginInfo) {
                this.router.navigate(["/user"]);
            } else {
                // this.showDangerMessage("Error! Please check your email and password.");
            }
        });
    }
}


