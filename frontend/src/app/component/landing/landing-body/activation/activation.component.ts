import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { LoginService } from 'src/app/service/user/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoginInfo } from 'src/app/object/LoginInfo';
@Component({
    selector: 'app-activation',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

    login_id = ""
    loginInfo : LoginInfo = null
    command = "Active Your Account"
    activationCode = ""

    /**
     * 
     * @param newInput is input activation
     * 
     */
    onActivationCodeChange(newInput: string) {
        this.activationCode = newInput
        if (this.activationCode.length == 6) {
            this.checkValidation()
        }
    }

    /**
     * @param route 
     * @param router 
     * @param loginService 
     */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private loginService: LoginService,
    ) { 
        this.loginInfo = this.loginService.getLoginInfo()
        this.loginService.loginInformation().subscribe(loginInfo => {
            this.loginInfo = loginInfo
            if (loginInfo.isEmailVerified) {
                this.showSuccessMessage("Activated!")
                this.router.navigate(["/user"])
            } else if (!loginInfo.isSignedIn) {
                this.showDangerMessage("Please log in first")
            }
        })
    }

    /**
     * init alert and user
     */
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.login_id = params["login_id"]
            this.loginService.refreshLoginInfoForId(this.login_id)
            if (params["verify_code"]) {
                this.activationCode = params["verify_code"]
                this.checkValidation()
            }
        });

        this.initAlert();
    }

    /**
     * check activation code
     * @return to *reset password* if *isForgotPasswword = TRUE*
     * @return to *Dashboard* 
     */
    checkValidation() {
        if (!this.loginInfo.isSignedIn) {
            this.showDangerMessage("Please log in first")
            return
        }

        if (!this.activationCode || this.activationCode.length != 6) {
            this.showDangerMessage("The activation code is 6 digits")
            return
        }

        this.loginService.verifyEmailActivationCode(this.login_id, this.activationCode, (err, data) => {
            if (!err) {
                this.showSuccessMessage("Activated!")
                this.router.navigate(["/user"])
            } else if (err == "loginNeeded") {
                // If the server knows that we aren't signed in, 
                // then we need to send the user to the sign in page.
                // It would be better if we can tell them why,
                // but the dangerMessage doens't show on the new page.
                this.showDangerMessage("Please log in first")
            } else {
                this.showDangerMessage("Error!!! Please confirm your validation code")
            }
        });
    }

    /**
     * resend validtion code *button listener*
     */
    resendValidationCode() {
        let tempObservable = this.loginService.resendActivationCode(this.login_id, (err, loginInfo) => {
            if (err) {
                this.showDangerMessage("Could not send a new activation code to your email")
            } else {
                this.showSuccessMessage("The new activation code has been sent to your email")
            }
        })
    }

    /**
     * alert
     */
    private _success = new Subject<string>();
    private _danger = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;
    errorMessage: string;

    public showSuccessMessage(message) {
        this._success.next(message);
    }

    public showDangerMessage(message) {
        this._danger.next(message);
    }

    /**
     * set alert
     */
    initAlert() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._success.subscribe((message) => this.successMessage = message);
        this._success.pipe(
            debounceTime(5000)
        ).subscribe(() => this.successMessage = null);

        this._danger.subscribe((message) => this.errorMessage = message);
        this._danger.pipe(
            debounceTime(5000)
        ).subscribe(() => this.errorMessage = null);

    }
}

