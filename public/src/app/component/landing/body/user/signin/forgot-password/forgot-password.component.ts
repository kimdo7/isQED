import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    sendEmail() {
        if (this.emailFormControl.invalid) {
            return
        }

        let tempObservable = this.userService.requestForgotPassword({ email: this.emailFormControl.value })
        tempObservable.subscribe(data => {
            if (data["message"] === "Success") {
                this.router.navigate(["/signin/validation/"+data["data"]["_id"]])
            } else {
                this.showDangerMessage("Error!!! Your email doesn't existed in our system.")
            }
            console.log("Got our tasks!", data)
        });


    }

    ngOnInit() {
        this.initAlert()
    }

    /**
     * Alert
     */
    private _danger = new Subject<string>();

    staticAlertClosed = false;
    successMessage: string;
    errorMessage: string;


    /**
     * set alert
     */
    initAlert() {
        setTimeout(() => this.staticAlertClosed = true, 20000);


        this._danger.subscribe((message) => this.errorMessage = message);
        this._danger.pipe(
            debounceTime(5000)
        ).subscribe(() => this.errorMessage = null);

    }


    public showDangerMessage(message) {
        this._danger.next(message);
    }


}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}