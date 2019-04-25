import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LandingPageRoutes } from '../landing-static/landing-page-routes';

@Component({
    selector: 'app-landing-body',
    templateUrl: './landing-body.component.html',
    styleUrls: ['./landing-body.component.scss']
})
export class LandingBodyComponent implements OnInit {
    /**
     * @param route current route
     * @param notTransparentRoutes
     * @param notSideBannerRoutes
     */
    route: string = "Home";
    notTransparentRoutes
    notSideBannerRoutes

    /**
     * @listen to the current route
     */
    constructor(router: Router) {
        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.route = (val.url != "/") ? val.url : "Home"

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
