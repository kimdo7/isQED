import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-sign-in-validation',
    templateUrl: './sign-in-validation.component.html',
    styleUrls: ['./sign-in-validation.component.css']
})
export class SignInValidationComponent implements OnInit {

    user = { email: "" }
    user_id = ""
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
     * @param userService 
     */
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }

    /**
     * init alert and user
     */
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.user_id = params["id"]
            this.getLoginEmail(params['id'])
        });

        this.initAlert();
    }

    /**
     * check activation code
     * @return to *reset password* if *isForgotPassowr = TRUE*
     * @return to *Dashboard* 
     */
    checkValidation() {
        if (this.activationCode == "") {
            return
        }

        let tempObservable = this.userService.checkIsEmailVerified(this.user_id, this.activationCode)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                this.router.navigate(["/learning"])
            } else if (data["message"] == "Error" && data["signInNeeded"]) {
                // If the server knows that we aren't signed in, 
                // then we need to send the user to the sign in page.
                // It would be better if we can tell them why,
                // but the dangerMessage doens't show on the new page.
                this.showDangerMessage("You must sign in")
                this.router.navigate(["/signin"])
            } else {
                this.showDangerMessage("Error!!! Please confirm your validation code")
            }
        });
    }

    /**
     * 
     * @param id user id
     */
    getLoginEmail(id) {
        let tempObservable = this.userService.getLoginEmail(id)
        tempObservable.subscribe(data => {
            this.user.email = data["email"]
        });
    }

    /**
     * resend validtion code *button listener*
     */
    resendValidationCode() {
        let tempObservable = this.userService.resendActivationCode(this.user_id)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                this.showSuccessMessage("The new validation code has sended to your email")
            } else {
                this.showDangerMessage("The new validation code can not send to your email")
            }
        });
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


