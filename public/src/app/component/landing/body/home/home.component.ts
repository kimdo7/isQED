import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
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
