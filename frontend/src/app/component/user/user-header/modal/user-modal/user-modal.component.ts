import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'ng-uikit-pro-standard';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
    user_name : string
    action = new Subject();

    constructor(public modalRef: MDBModalRef) { }

    ngOnInit() {
    }

    onLogout(){
        this.action.next("Log Out")
    }
}
