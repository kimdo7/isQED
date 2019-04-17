import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { UserService } from 'src/app/service/user/user.service';


@Component({
    selector: 'app-forgot-password-modal',
    templateUrl: './forgot-password-modal.component.html',
    styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {
    action = new Subject();

    constructor(
        private userService: UserService,
        public modalRef: MDBModalRef
    ) { }

    ngOnInit() {
    }

    sendMail() {
        console.log("Pretending to send mail")
        let tempObservable = this.userService.requestForgotPassword({ email: "fakeemail@example.org" })
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
}
