import { Component, OnInit } from '@angular/core';
import { LandingPageRoutes } from '../landing-static/landing-page-routes';
import { Router, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
    /**
     * @param route current route
     * @param notTransparentRoutes 
     * @param notSideBannerRoutes 
     */
    route: string = "Home";
    notTransparentRoutes 
    notSideBannerRoutes

    /**
     * 
     * @param router subcribe to current route
     */
    constructor(router: Router) {
        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                this.route = (val.url != "/") ? val.url : this.route = "Home"
            }
        });
    }

    /**
     * @init
     */
    ngOnInit() {
        this.notSideBannerRoutes = LandingPageRoutes.getNoSideBanerRoutes()
        this.notTransparentRoutes = LandingPageRoutes.getNonTransparentHeaderRoutes()
    }

    isSideBanner() {
        return this.notSideBannerRoutes.includes(this.route)
    }

    isTransparentNav() {
        return this.notSideBannerRoutes.includes(this.route)
    }

}
