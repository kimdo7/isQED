import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";


/**
 * *LandingComponent*
 * contains the frame of the landing page
 * It will be broken into three parts;
 *      @header
 *      @body
 *      @footer
 */
@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    route: string;

    constructor(location: Location, router: Router) {
        router.events.subscribe(val => {
            if (location.path() != "") {
                this.route = location.path();
            } else {
                this.route = "Home";
            }
        });
    }

    ngOnInit() {
    }

}
