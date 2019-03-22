import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger(
            'enterAnimation', [
                transition(':enter', [
                    style({ transform: 'translateX(100%)', opacity: 0 }),
                    animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateX(0)', opacity: 1 }),
                    animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ]
        )
    ],
})

export class HomeComponent implements OnInit {

    isEmailed = false;
    email = new FormControl('', [Validators.required, Validators.email]);

    constructor() { }

    ngOnInit() {
    }

    onEmailUpdated() {
        this.isEmailed = !this.isEmailed
    }


    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

}
