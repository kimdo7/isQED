import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { LandingModalForms } from '../../landing-modal/landing-modal-forms';
import { LandingModalValidationErrors } from '../../landing-modal/landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';
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
    login_id = null
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
            if (params["temp_code"]) {
              tempCode = params["temp_code"]
              this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
              this.secondFormGroup = LandingModalForms.init_reset_password()
            } else {
              this.resendPasscodeViaEmail()
            }
        });
    }

    resendPasscodeViaEmail() {
      // FOR DEMO ONLY we are resending the login_id
      // A real user won't know their login_id and only knows their email
      this.loginService.requestForgotPassword({ login_id: this.login_id }, (err,data) => {
        if (data && data["DEBUG_ActualTempPasscode"]){
          var tempCode = data["DEBUG_ActualTempPasscode"]
          this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
          this.secondFormGroup = LandingModalForms.init_reset_password()
        }
      })
    }

    onSubmit() {
        var request = { email: null, tempPassword: this.firstFormGroup.value.code, newPassword: this.secondFormGroup.value.password }
        this.loginService.changePasswordAfterForgetting(request, (err, data) => {
          if (data) {
            this.router.navigate(["/user"]);
          }
        })
    }

    onActivationCodeChange(newInput: string) {
        if (newInput.length == 6){
            this.attempt += 1
        }
    }
}


