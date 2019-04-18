import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from '../frontend/src/app/component/validator/PasswordValidator';
import { UserValidatorMessage } from '../../../../../../../../../frontend/src/app/validator/user_validation_message';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-sign-in-default',
    templateUrl: './sign-in-default.component.html',
    styleUrls: ['./sign-in-default.component.scss']
})
export class SignInDefaultComponent implements OnInit {

    user_form: FormGroup
    validation_messages = UserValidatorMessage.message
    hide: boolean = true

    /**
     * 
     * @param formBuilder 
     * @param userService 
     * @param router 
     */
    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) { }

    /**
     * @param user_form *init*
     * @param alert *init*
     */
    ngOnInit() {
        this.initUserForm()
        this.initAlert()
    }

    /**
     * @param email
     * @param password
     */
    initUserForm() {
        this.user_form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }

    /**
     * @alert if *errror*
     * if *need to activate*
     *      @navigate to validation page
     * else 
     *      @navigate to the proper *dashboard*
     */
    onSignIn() {
        if (this.user_form.invalid) {
            this.showDangerMessage("Error!!! Please check your email and password.")
            return;
        }

        let tempObservable = this.userService.login(this.user_form.value)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                if (data["data"]["isEmailVerified"]) {
                    this.router.navigate(["/learning"])
                } else {
                    this.router.navigate(["/signin/validation/" + data["data"]["login_id"]])
                }
            } else {
                this.showDangerMessage("Error!!! Please check your email and password.")
            }
        });
    }

    /**
     * @alert
     */

    private _danger = new Subject<string>();
    staticAlertClosed = false;
    successMessage: string;
    errorMessage: string;
    /**
     * *init alert*
     */
    initAlert() {
        setTimeout(() => this.staticAlertClosed = true, 20000);

        this._danger.subscribe((message) => this.errorMessage = message);
        this._danger.pipe(
            debounceTime(5000)
        ).subscribe(() => this.errorMessage = null);
    }

    /**
     * 
     * @param message display the error message
     */
    public showDangerMessage(message) {
        this._danger.next(message);
    }
}
