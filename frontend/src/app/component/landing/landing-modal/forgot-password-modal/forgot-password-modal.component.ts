import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { LoginService } from 'src/app/service/user/login.service';
import { UserService } from 'src/app/service/user/user.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-forgot-password-modal',
    templateUrl: './forgot-password-modal.component.html',
    styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {
    action = new Subject();
    text: string;
    validationForm: FormGroup;
    
    constructor(
        private LoginService: LoginService,
        public modalRef: MDBModalRef,
        private userService: UserService,
        public fb: FormBuilder
    )  { 
        this.validationForm = fb.group({
            emailFormEx: [null, [Validators.required, Validators.email]]
          });
    }

    ngOnInit() {
    }

    onSendMail() {
        console.log("Pretending to send mail")
        let tempObservable = this.LoginService.requestForgotPassword({ email: "fakeemail@example.org" })
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                console.log("sendEmail: got success")
                // We don't know the ID, and shouldn't
                // We want to reset the passcode based only on the email
                this.action.next('Change After Forgot Password');
            } else {
                console.log("sendEmail: got no success")
            }
        });
    }

    openRegisterModal() {
        this.action.next('Register');
    }

    openLogInModal() {
        this.action.next('Log In');
    }

    get emailFormEx() { return this.validationForm.get('emailFormEx'); }
}
