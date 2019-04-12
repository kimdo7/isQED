import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
    selector: 'app-landing-header',
    templateUrl: './landing-header.component.html',
    styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

    isHamburgerOpen = false
    lastScrollTop = 0;

    constructor() { }

    ngOnInit() {
    }

    button_click() {
    }


    openHamburger() {
        this.isHamburgerOpen = !this.isHamburgerOpen;
    }

}
