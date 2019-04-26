import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { LoginService } from 'src/app/service/user/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LandingModalValidationErrors } from '../landing-modal-validations-errors';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password-modal',
    templateUrl: './forgot-password-modal.component.html',
    styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {
    action = new Subject();
    errorMessage: string;
    forgot_password: FormGroup;
    validation_messages = LandingModalValidationErrors.message
    
    constructor(
        private loginService: LoginService,
        public modalRef: MDBModalRef,
        private userService: UserService,
        public fb: FormBuilder,
        private router: Router,
    )  { 
        this.forgot_password = fb.group({
            email: [null, [Validators.required, Validators.email]]
        });
    }

    ngOnInit() {
    }

    onSendMail() {
        this.loginService.requestForgotPassword(this.forgot_password.value, (err, data) => {
            if (data) {
                this.router.navigate(["/reset-password", data])
                console.log("onSendMail: data" + data)
            } else {
            }
        });
    }

    openRegisterModal() {
        this.action.next('Register');
    }

    openLogInModal() {
        this.action.next('Log In');
    }

    get email() { return this.forgot_password.get('email'); }

}
