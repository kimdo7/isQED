import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
import { LandingPageRoutes } from '../landing-static/landing-page-routes';

@Component({
    selector: 'app-landing-body',
    templateUrl: './landing-body.component.html',
    styleUrls: ['./landing-body.component.scss']
})
export class LandingBodyComponent implements OnInit {
    route: string = "Home";
    notTransparentRoutes
    notSideBannerRoutes
    constructor(location: Location, router: Router) {
        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                if (val.url != "/") {
                    this.route = val.url
                } else {
                    this.route = "Home";
                }

                if (this.route.match("/activate")){
                    this.route = "/activate"
                } else if (this.route.match("/reset-password")){
                    this.route = "/reset-password"
                }
            }
        });

        
    }

    ngOnInit() {
        this.notSideBannerRoutes = LandingPageRoutes.getNoSideBanerRoutes()
        this.notTransparentRoutes = LandingPageRoutes.getNonTransparentHeaderRoutes()
    }

}
