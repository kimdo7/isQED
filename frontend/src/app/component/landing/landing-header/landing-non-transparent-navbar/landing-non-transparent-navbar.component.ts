import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../../landing-modal/forgot-password-modal/forgot-password-modal.component';
import { LoginService } from 'src/app/service/user/login.service';

@Component({
    selector: 'app-landing-non-transparent-navbar',
    templateUrl: './landing-non-transparent-navbar.component.html',
    styleUrls: ['./landing-non-transparent-navbar.component.scss']
})
export class LandingNonTransparentNavbarComponent implements OnInit {

    loggedIn: boolean = false
    modalRef: MDBModalRef

    constructor(
        private modalService: MDBModalService,
        private loginService: LoginService,
        ) { }

    ngOnInit() {
        // This lets the component know if the user is logged in or logged out.
        this.loggedIn = this.loginService.isLoggedInNow()
        console.log("LandingNonTransparentNavbar: ngOnInit: logged in = " + this.loggedIn)
        // This gets called everytime whenever the loggedIn gets changed
        // If someone gets loggred out, this component will know.
        this.loginService.isLoggedIn().subscribe(isLoggedIn => {
            this.loggedIn = isLoggedIn
            console.log("LandingNonTransparentNavbar: changed logged in = " + this.loggedIn)
        })
    }

    dismissModal() {
        this.modalService.hide(1)
    }

    openLoginModal() {
        // TEST: Treat the login button as a logout button, if someone is already logged in.
        // -- We currently don't have a logout button, but this is the code to run for logout.
        // -- To get registration working, This change was made to get the login state working properly.
        
        // if (this.loggedIn) {
        //     console.log("LandingNavbar: openLoginModal: Someone is logged in already, so logging them out")
        //     this.loginService.logout()
        // }

        this.modalRef = this.modalService.show(LogInModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered',
            containerClass: 'right',
            animated: true
        });

        /**
         * @listener to *SWAP MODAL*
         */
        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Register") {
                this.openRegisterModal()
            } else if (result == "Forgot Password") {
                this.openForgotPasswordModal()
            } else if (result == "Logged In") {
                this.dismissModal()
            }
        });
    }

    openRegisterModal() {
        this.modalRef = this.modalService.show(RegisterModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered',
            containerClass: 'right',
            animated: true
        });

        /**
        * @listener to *SWAP MODAL*
        */
        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Log In") {
                this.openLoginModal()
            } else if (result == "Forgot Password") {
                this.openForgotPasswordModal()
            } else if (result == "Registered") {
                this.dismissModal()
            }
        });
    }

    openForgotPasswordModal() {
        this.modalRef = this.modalService.show(ForgotPasswordModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered',
            containerClass: 'right',
            animated: true
        });

        /**
        * @listener to *SWAP MODAL*
        */
        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Log In") {
                this.openLoginModal()
            } else if (result == "Register") {
                this.openRegisterModal()
            }
        });
    }
}
