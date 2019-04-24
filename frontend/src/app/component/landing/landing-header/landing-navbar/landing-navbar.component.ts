import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../../landing-modal/forgot-password-modal/forgot-password-modal.component';
import { LoginService } from 'src/app/service/user/login.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-navbar',
    templateUrl: './landing-navbar.component.html',
    styleUrls: ['./landing-navbar.component.scss']
})
export class LandingNavbarComponent implements OnInit {

    modalRef: MDBModalRef;
    route: string;
    lastScrollTop = 0;
    loggedIn: boolean = false
    loginState: string = ""


    constructor(
        private modalService: MDBModalService,
        private loginService: LoginService,
        private router: Router,
    ) {
    }


    ngOnInit() {
        // This lets the component know if the user is logged in or logged out.
        this.loginState = this.loginService.getLoginInfo().state
        console.log("LandingNavbarComponent: ngOnInit: logged in %s %o", this.loggedIn, this.loginState) 

        
        this.loginService.refreshLoginInfo()


        // DOM actions
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

        // TEST: Treat the login button as a logout button, if someone is already logged in.
        // This will work if user clicks login or clicks log out. It won't work if the server logs them out (ex. login record is deleted on the server)
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
            class: 'modal-dialog-centered modal-lg',
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
            class: 'modal-dialog-centered modal-lg',
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
            } else if (result == "Logged In") {
                this.dismissModal()
            }
        });
    }

    dismissModal() {
        this.modalService.hide(1)
    }

    openForgotPasswordModal() {
        this.modalRef = this.modalService.show(ForgotPasswordModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog-centered modal-lg',
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

    onClickDebugState() {
        if (this.loggedIn) {
            if (this.loginState == "Student") {
                // user is not using the same router for some reason.  Doesn't work
                //this.router.navigate(["/user"])
                window.location.assign("/user")
            }
        }
    }

}
