import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            $(window).scroll(function () {
                var headerTop = $('#header-logo').height();
                // console.log(aTop)
                if ($(this).scrollTop() >= headerTop + 50) {
                    $("#navbar").addClass("fixed-top")
                }else{
                    $("#navbar").removeClass("fixed-top")
                }
            })
        });
    }

}

// fixed-top