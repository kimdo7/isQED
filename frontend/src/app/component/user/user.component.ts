import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/user/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) { }

    onLogout(): void {
        this.loginService.logout()
        this.router.navigate([""]);
    }

    ngOnInit() { 
        console.log(localStorage)
    }

}
