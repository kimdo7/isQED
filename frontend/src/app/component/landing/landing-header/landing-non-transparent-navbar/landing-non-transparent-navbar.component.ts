import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../../landing-modal/forgot-password-modal/forgot-password-modal.component';

@Component({
    selector: 'app-landing-non-transparent-navbar',
    templateUrl: './landing-non-transparent-navbar.component.html',
    styleUrls: ['./landing-non-transparent-navbar.component.scss']
})
export class LandingNonTransparentNavbarComponent implements OnInit {
    /**
     * @param modalRef modal
     * @param route current route
     * @param lastScrollTop last scroll position
     * @param modalConfig 
     */
    modalRef: MDBModalRef
    modalConfig = {}

    constructor(
        private modalService: MDBModalService,
    ) { }

    ngOnInit() {
        this.initModalConfig()
    }

    /**
     * @Modal Login
     */
    openLoginModal() {
        this.modalRef = this.modalService.show(LogInModalComponent, this.modalConfig);

        /**
         * @listener to *SWAP MODAL*
         */
        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Register") {
                this.openRegisterModal()
            } else if (result == "Forgot Password") {
                this.openForgotPasswordModal()
            } 
        });
    }

    /**
     * @Modal Register
     */
    openRegisterModal() {
        this.modalRef = this.modalService.show(RegisterModalComponent, this.modalConfig);

        /**
        * @listener to *SWAP MODAL*
        */
        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Log In") {
                this.openLoginModal()
            } else if (result == "Forgot Password") {
                this.openForgotPasswordModal()
            } 
        });
    }

    /**
     * @Modal Forgot Password
     */
    openForgotPasswordModal() {
        this.modalRef = this.modalService.show(ForgotPasswordModalComponent, this.modalConfig);

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

    /**
     * @init modal config
     */
    initModalConfig(){
        this.modalConfig = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered modal-lg',
            containerClass: 'right',
            animated: true
        }
    }
}
