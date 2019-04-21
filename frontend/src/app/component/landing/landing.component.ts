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
    notTransparentRoutes
    notSideBannerRoutes 

    constructor(location: Location, router: Router, private modalService: MDBModalService) {

        router.events.subscribe(val => {
            if (val instanceof NavigationEnd){
                if (val.url != "/") {
                    this.route = val.url
                } else {
                    this.route = "Home";
                }
            } 
        });
    }

    ngOnInit() {
        this.notSideBannerRoutes = LandingPageRoutes.getNoSideBanerRoutes()
        this.notTransparentRoutes = LandingPageRoutes.getNonTransparentHeaderRoutes()
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
        return this.notSideBannerRoutes.includes(this.route)
    }

    isTransparentNav(){
        return this.notSideBannerRoutes.includes(this.route)
    }

}
