import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { Subject } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LandingModalForms } from '../landing-modal-forms';
import { LoginService } from 'src/app/service/user/login.service';
import { debounceTime } from 'rxjs/operators';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {
    action = new Subject();
    contact_form: FormGroup;

    constructor(
        public modalRef: MDBModalRef,
        private modalService: MDBModalService,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() {
        this.initUserForm();
        this.initAlert();
        this.contact_form = LandingModalForms.init_login_form(this.formBuilder);
    }

    openRegisterModal() {
        this.action.next('Register');
    }

    openForgotPasswordModal() {
        this.action.next('Forgot Password');
    }

    initUserForm() {
        this.contact_form = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        })
    }

    onLogin() {
        console.log(this.contact_form.value);
        if (this.contact_form.invalid) {
            this.showDangerMessage("Error! Please check your email and password");
            return
        }
        /**
         * When we do the login info, you don't need to subscrib here.  
         * We call the loginInfo to get the info. 
         * We need it because the loginService is saving it in localStorage
         * whenever it gets a new value back.
         */
        this.loginService.login(this.contact_form.value, (err, loginInfo) => {
            if (loginInfo) {
                if(loginInfo.isEmailVerified) {
                    this.action.next('Logged In')
                    this.router.navigate(["/user"]);
                } else {
                    // need activation code to be entered from email
                    this.action.next('Logged In')
                    this.router.navigate(["/activate", loginInfo.login_id, ""]);
                }
            } else {
                console.log("onLogin errors %o", err)
                this.showDangerMessage("Error! Please check your email and password.");
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
