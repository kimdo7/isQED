import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../../landing-modal/forgot-password-modal/forgot-password-modal.component';
import * as $ from 'jquery';

@Component({
    selector: 'app-landing-navbar',
    templateUrl: './landing-navbar.component.html',
    styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

    modalRef: MDBModalRef;
    route: string;
    lastScrollTop = 0;


    constructor(
        private modalService: MDBModalService,
    ) {
    }


    ngOnInit() {
        

        $(document).ready(function () {
            var isOpenHamburger = false
            /**
             * @scrool up and down
             */
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (st > this.lastScrollTop) {
                    // downscroll code
                    $(".navbar").css("background-color", "#3f51b5")
                    $(".authentication-buton").css("background-color", "#4285f4")
                } else if (st == 0) {
                    // upscroll code
                    $(".navbar").css("background-color", "transparent")
                    $(".authentication-buton").css("background-color", "transparent")
                }
                this.lastScrollTop = st;
            });

            $(".navbar-toggler").click(function () {
                if (isOpenHamburger) {
                    $(".navbar").css("background-color", "transparent")
                    $(".authentication-buton").css("background-color", "transparent")
                } else {
                    $(".navbar").css("background-color", "#3f51b5")
                    $(".authentication-buton").css("background-color", "#4285f4")
                }

                isOpenHamburger = !isOpenHamburger
            })
        })
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
