import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isHamburgerOpen = false
    isSearch = false
    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            $("#navbar-brand").hide();

            $(window).scroll(function () {
                var headerTop = $('#header-logo').height();
                if ($(this).scrollTop() >= headerTop + 50) {
                    $("#navbar").addClass("fixed-top")
                    $("#navbar-brand").show();
                } else {
                    $("#navbar").removeClass("fixed-top")
                    $("#navbar-brand").hide();
                }
            })
        });
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

    
    search_btn_click(){
        this.button_click();
        this.isSearch = !this.isSearch
    }
    openHamburger() {
        this.isHamburgerOpen = !this.isHamburgerOpen;
    }

}