import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-activation',
    templateUrl: './activation.component.html',
    styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

    constructor(private _route: ActivatedRoute,
        private _router: Router) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['login_id'])
            console.log(params['verify_code'])
        });
    }

}
