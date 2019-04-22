import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { ContactUsModalComponent } from './landing-modal/contact-us-modal/contact-us-modal.component';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    modalRef: MDBModalRef;
    route: string = "Home";

    constructor(private modalService: MDBModalService,
        location: Location, router: Router) {
        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                if (val.url != "/") {
                    this.route = val.url
                } else {
                    this.route = "Home";
                }
            }
        });
    }

    ngOnInit() {
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



}
