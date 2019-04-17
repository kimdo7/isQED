import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-banner',
    templateUrl: './landing-banner.component.html',
    styleUrls: ['./landing-banner.component.scss']
})
export class LandingBannerComponent implements OnInit {

    route: string
    images = []
    random = 0

    constructor() {
        
    }

    ngOnInit() {
        this.images = []
        this.images.push("assets/img/banner/asqed_skyscraper.png")
        this.images.push("assets/img/banner/IOT_Summit_skyscraper.png")
        this.images.push("assets/img/banner/isqed_skyscraper.png")
        this.images.push("assets/img/banner/svpti_skyscraper.png")

        this.random = Math.floor(Math.random() * this.images.length)
    }

}
