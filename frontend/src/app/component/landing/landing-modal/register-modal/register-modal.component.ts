import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/service/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidatorMessage } from 'src/app/validator/user_validation_message';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LandingModalForms } from '../landing-modal-forms';


// https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
@Component({
    selector: 'app-register-modal',
    templateUrl: './register-modal.component.html',
    styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
    action = new Subject();

    // validation_messages = UserValidatorMessage.message
    // passwordStrengthValidator = PasswordStrengthValidator

    /**
     * 
     * @param formBuilder 
     * @param userService 
     * @param router 
     */
    // hidePassword: boolean = true
    // hideErrors: boolean = true
    register_form: FormGroup

    constructor(
        public modalRef: MDBModalRef,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
        ) { }

    /**
     * @param user_form *init*
     * @param alert *init*
     */
    ngOnInit() {
        this.register_form =  LandingModalForms.init_register_form(this.formBuilder)
    }

    /**
     * *Validation*
     * @register account
     * @alert if failure
     * @navigate to validation acount that sent by email
     */
    onRegister() {
        console.log("onRegister")
        // if (this.user_form.invalid) {
        //         // showDangerMessage shows up on the webpage.
        //         this.showDangerMessage("Error!!! Please confirm email and password")
        //     return;
        // }
        console.log("onRegister: valid form")
        let tempObservable = this.userService.register(this.register_form.value)
        tempObservable.subscribe(data => {
            console.log("onRegister: userService returned %o", data)
            if (!data) {
                console.log("server not available")
                //this.showDangerMessage("Error!!! Server not available. Please try later.")
            } if (data["message"] === "Success") {
                // THis isn't right.
                // Just trying to get the UI to start showing the right thing
                this.action.next('Registered');
            } else if (data["error"]) {
                console.log("Error!!! " + data["error"])
                //this.showDangerMessage("Error!!! " + data["error"])
            } else {
                console.log("Error!!! Please confirm email and password")
               // this.showDangerMessage("Error!!! Please confirm email and password")
            }
        });
    }


    /**
     * alert
     */

    private _danger = new Subject<string>();

    staticAlertClosed = false;
    errorMessage: string;


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

    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    openLogInModal() {
        this.action.next('Log In');
    }
}
