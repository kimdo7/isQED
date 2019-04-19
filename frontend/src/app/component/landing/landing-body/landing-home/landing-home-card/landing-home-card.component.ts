import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-home-card',
    templateUrl: './landing-home-card.component.html',
    styleUrls: ['./landing-home-card.component.scss']
})
export class LandingHomeCardComponent implements OnInit {
    @Input()  key : String

    cards : any
    constructor(private _router: Router) { }

    ngOnInit() {
        this.init_cards()
    }

    init_cards(){
        this.cards = {
            "training": {
                title: "Training",
                img: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                description: "This is description",
                link : ""
            },
            "certifications": {
                title: "Certification",
                img: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                description: "This is description",
                link : ""
            },
            "events": {
                title: "Events",
                img: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                description: "This is description",
                link : ['/events']
            },
            "publications": {
                title: "Publications",
                img: "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
                description: "This is description",
                link : ""
            },
        }
    }

}
