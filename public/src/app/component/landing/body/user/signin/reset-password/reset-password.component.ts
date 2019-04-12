import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../../user_validation_message';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    hidePassword: boolean = true
    hideConfirm_Password: boolean = true
    hideErrors: boolean = true
    validation_messages = UserValidatorMessage.message
    passwordStrengthValidator = PasswordStrengthValidator
    user_form: FormGroup
    login_id : string = ""
    user_email : string = ""

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    /**
       * init alert and user
       */
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.user_email = params["email"];
            // If login_id is not present, then the user isn't signed in and we treat it like a forgotten password reset
            this.login_id = params["login_id"];
            if (!this.user_email) {
                this.getLoginEmail(this.login_id)
            }
            this.user_form.value.oldPassword = params["tempPasscode"]
        });

        this.initForm()
        this.initAlert();
    }

    /**
     * 
     * @param id user id
     */
    getLoginEmail(id) {
        let tempObservable = this.userService.getLoginEmail(id)
        tempObservable.subscribe(data => {
            if (data) {
                this.user_email = data["email"]
            }
        });
    }


    onChangePassword() {

        if (this.user_form.invalid) {
            this.showDangerMessage("Error!!! Please double check your password and confirm password")
            return;
        }

        // We need the user to enter their old password on the web page
        // to prove that they know it.
        // Otherwise just someone walking by when the page is logged in
        // can change your password in a moment.
        var oldPassword = this.user_form.value.oldPassword;
        var newPassword = this.user_form.value.password;
        if (this.login_id) {
            // User is logged in and wants to change their password
            let tempObservable = this.userService.changePassword(this.login_id, { email: this.user_email, oldPassword: oldPassword, newPassword: newPassword })
            tempObservable.subscribe(data => {
                if (data["message"] === "Success") {
                    this.router.navigate(["/learning"])
                } else if (data["message"] == "Error" && data["error"]) {
                    this.showDangerMessage("Error!!! " + data["error"])
                } else {
                    this.showDangerMessage("Error!!! Please double check your password and confirm password")
                }
                console.log(data)
            });
        } else {
            // User cannot log in and so doesn't have a login_id
            // and is using a temp password from email 
            // to reset their password
            let tempObservable = this.userService.changePasswordAfterForgetting({ email: this.user_email, tempPassword: oldPassword, newPassword: newPassword })
            tempObservable.subscribe(data => {
                if (data["message"] === "Success") {
                    this.router.navigate(["/learning"])
                } else if (data["message"] == "Error" && data["error"]) {
                    this.showDangerMessage("Error!!! " + data["error"])
                } else {
                    this.showDangerMessage("Error!!! Please double check your password and confirm password")
                }
                console.log(data)
            });
        }
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
     * @PasswordStrength 
        * *At least 8 characters in length*
        * *Lowercase letters*
        * *Uppercase letters*
        * *Numbers*
        * *Special characters*
     */
    initForm() {
        this.user_form = new FormGroup({
            password: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d].{7,}')
                ]
            )),
            confirm_password: new FormControl('', Validators.compose(
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d].{7,}')
                ]))
        }, (formGroup: FormGroup) => {
            return PasswordValidator.areEqual(formGroup);
        });
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
}
