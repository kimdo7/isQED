import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ContactUsModalComponent } from './landing-modal/contact-us-modal/contact-us-modal.component';
import * as $ from 'jquery';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    route: string;
    modalRef: MDBModalRef;
    notTransparentList
    notSideBannerList = []

    constructor(location: Location, router: Router, private modalService: MDBModalService) {

        router.events.subscribe(val => {
            if (location.path() != "") {
                this.route = location.path();
            } else {
                this.route = "Home";
            }
        });
    }

    ngOnInit() {
        this.notSideBannerList.push('Home')
        this.notSideBannerList.push('/about/contact-us')
        this.notSideBannerList.push('/events')


        this.notTransparentList = []
        this.notTransparentList.push("/about/privacy_policy")



    }

    openContactUsModal() {
        this.modalRef = this.modalService.show(ContactUsModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-side modal-bottom-right',
            containerClass: 'right',
            animated: true
        });
    }

    isSideBanner() {
        return this.notSideBannerList.includes(this.route)
    }

    isTransparentNav(){
        return !this.notSideBannerList.includes(this.route)
    }

}
