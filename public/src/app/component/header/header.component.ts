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
    lastScrollTop = 0;

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            /**
             * Set up navbar brand height
             */
            $("#navbar-brand").hide();
            $("#navbar-brand").height($("#navbar").height() - 10)

            /**
             * Window scroll down up event
             */
            $(window).scroll(function () {
                var headerTop = $('#header-logo').height();
                var st = $(this).scrollTop();
                // console.log(st + $(window).height())
                if (st + $(window).height() >= $(document).height()) {
                    
                    if (st == 0) {
                        $("#navbar").removeClass("fixed-top")
                        $("#navbar-brand").hide();
                        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
                        });
                    }
                } else if (st > this.lastScrollTop) {
                    $("#navbar").addClass("fixed-top")
                    $("#navbar-brand").show();
                } else if (st <= headerTop) {
                    console.log(st)
                    $("#navbar").removeClass("fixed-top")
                    $("#navbar-brand").hide();
                }
                this.lastScrollTop = st;
            })


            // console.log($("#wrapper").height())
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


    search_btn_click() {
        this.button_click();
        this.isSearch = !this.isSearch
    }
    openHamburger() {
        this.isHamburgerOpen = !this.isHamburgerOpen;
    }

}