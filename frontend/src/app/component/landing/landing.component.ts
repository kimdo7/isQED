import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
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
