import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    route: string
    images = []
    random = 0
    image: string

    constructor(location: Location, router: Router) {
        router.events.subscribe(val => {
            if (location.path() != "") {
                this.route = location.path();
            } else {
                this.route = "Home";
            }
            this.random = Math.floor(Math.random() * 4)
        });

    }

    ngOnInit() {
        this.initImage()
    }

    initImage() {
        this.images = []
        this.images.push("assets/img/banner/asqed_skyscraper.png")
        this.images.push("assets/img/banner/IOT_Summit_skyscraper.png")
        this.images.push("assets/img/banner/isqed_skyscraper.png")
        this.images.push("assets/img/banner/svpti_skyscraper.png")
    }

}
