import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/user/login.service';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/localStorage/localStorage';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    constructor(
        private localStore: LocalStorage
    ) { }

    

    ngOnInit() { 
        
    }

}
