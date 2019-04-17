import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ContactUsModalComponent } from './landing-modal/contact-us-modal/contact-us-modal.component';
import * as $ from 'jquery';
import { LandingPageRoutes } from './landing-static/landing-page-routes';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    route: string = "Home";
    modalRef: MDBModalRef;
    notTransparentList
    notSideBannerList 

    constructor(location: Location, router: Router, private modalService: MDBModalService) {

        router.events.subscribe(val => {
            // if (location.path() != "") {
            //     this.route = location.path();
            // } else {
            //     this.route = "Home";
            // }

            if (val instanceof NavigationEnd){
                // console.log("val" + val.url)
                if (val.url != "/") {
                    this.route = val.url
                } else {
                    this.route = "Home";
                }
            } 
        });
    }

    ngOnInit() {
        this.notSideBannerList = LandingPageRoutes.getNoSideBanerRoutes()
        this.notTransparentList = LandingPageRoutes.getNonTransparentHeaderRoutes()
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
        // console.log("confirm val" + this.route)
        return this.notSideBannerList.includes(this.route)
    }

    isTransparentNav(){
        return this.notSideBannerList.includes(this.route)
    }

}
