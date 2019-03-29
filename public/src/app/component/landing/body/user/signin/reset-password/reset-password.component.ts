import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';
import { UserValidatorMessage } from '../../user_validation_message';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    user_id = ""
    hide: boolean = true
    validation_messages = UserValidatorMessage.message
    user_form: FormGroup

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) { }

    /**
       * init alert and user
       */
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.user_id = params["id"]
        });

        this.initForm()
        this.initAlert();
    }

    onChangePassword() {

        if (this.user_form.invalid) {
            this.showDangerMessage("Error!!! Please double check your password and confirm password")
            return;
        }

        let tempObservable = this.userService.resetPassword(this.user_id, this.user_form.value)
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                this.router.navigate(["/learning"])
            } else {
                this.showDangerMessage("Error!!! Please double check your password and confirm password")
            }
            console.log(data)
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

    initForm() {
        this.user_form = new FormGroup({
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required,
            ])),
            confirm_password: new FormControl('', Validators.required)
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