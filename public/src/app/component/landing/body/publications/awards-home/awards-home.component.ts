import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-awards-home',
    templateUrl: './awards-home.component.html',
    styleUrls: ['./awards-home.component.scss'],
})

export class AwardsHomeComponent implements OnInit {
    constructor() {
    }

    datas = [
        {"title": "ISQED Quality Award (IQ-Award)", "code": "402306670"},
        {"title": "ISQED Education Leadership Award", "code": "402306671"},
        {"title": "I'ISQED Quality Educator Award)", "code": "402306671"},
        {"title": "ISQED Fellow Award", "code": "402306669"},
    ]
    ngOnInit() {
    }

}
