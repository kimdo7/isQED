import { Component, OnInit } from '@angular/core';
import { LandingPageRoutes } from '../landing-static/landing-page-routes';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from "@angular/common";
@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
    route: string = "Home";
    notTransparentRoutes
    notSideBannerRoutes

    constructor(location: Location, router: Router ){

        router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
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
