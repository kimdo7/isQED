import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../landing-modal/forgot-password-modal/forgot-password-modal.component';
import * as $ from 'jquery';

@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

    modalRef: MDBModalRef;

    lastScrollTop = 0;

    constructor(
        private modalService: MDBModalService
    ) { }

    ngOnInit() {
        // $(document).ready(function () {
        //     $(".nav-link").hover(
        //         function () {
        //             console.log("hover")
        //             // $(this).click()
        //             $("#test").click()
        //             // $(this).addClass("hover");
        //         }, function () {
        //             // $(this).removeClass("hover");
        //         }
        //     );
        // })
    }


    openLoginModal() {
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
