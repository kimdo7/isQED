import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isHamburgerOpen = false
    lastScrollTop = 0;

    constructor() { }

    ngOnInit() {
    }

    button_click() {
        //if it is a mobile version then click the hamberger btn
        if ($(window).width() < 992) {
            if (this.isHamburgerOpen)
                $("#hamburgerbtn").click()
        }

        //auto scroll to top of the page
        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
        });
    }


    openHamburger() {
        this.isHamburgerOpen = !this.isHamburgerOpen;
    }

}