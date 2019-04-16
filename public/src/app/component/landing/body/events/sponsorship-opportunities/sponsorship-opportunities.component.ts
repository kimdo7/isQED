import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sponsorship-opportunities',
    templateUrl: './sponsorship-opportunities.component.html',
    styleUrls: ['./sponsorship-opportunities.component.scss']
})
export class SponsorshipOpportunitiesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    datas = [
        { "title": "ISQED Sponsorship", "code": "402323355" },
        { "title": "ASQED Sponsorship", "code": "402323354" },
        { "title": "IoT Summit Sponsorship", "code": "402323326" },
    ]
}
