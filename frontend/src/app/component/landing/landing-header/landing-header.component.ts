import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { LogInModalComponent } from '../landing-modal/log-in-modal/log-in-modal.component';
import { RegisterModalComponent } from '../landing-modal/register-modal/register-modal.component';
import { ForgotPasswordModalComponent } from '../landing-modal/forgot-password-modal/forgot-password-modal.component';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { LandingPageRoutes } from '../landing-static/landing-page-routes';

@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

    modalRef: MDBModalRef;
    route: string;
    notTransparentList
    sideClass = 'navbar navbar-expand-lg indigo navbar-dark  fixed-top scrolling-navbar'
    lastScrollTop = 0;

    constructor(
        private modalService: MDBModalService,
        location: Location, router: Router
    ) {
        router.events.subscribe(val => {
            this.route = location.path();
        });
    }

    getSideClass() {
        return this.notTransparentList.includes(this.route)
            ? "navbar navbar-expand-lg indigo navbar-dark fixed-top scrolling-navbar"
            : "navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
    }

    get_authentication_button_color(){
        return this.notTransparentList.includes(this.route) ? "primary" : "transparent"
    }

    ngOnInit() {
        this.notTransparentList = LandingPageRoutes.getNonTransparentHeaderRoutes()

        $(document).ready(function () {

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
