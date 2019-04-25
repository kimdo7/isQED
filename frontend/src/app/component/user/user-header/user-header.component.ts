import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { LocalStorage } from 'src/app/localStorage/localStorage';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { UserModalComponent } from './user-modal/user-modal.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/user/login.service';

@Component({
    selector: 'app-user-header',
    templateUrl: './user-header.component.html',
    styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
    /**
     * 
     */
    user_name: String
    modalRef: MDBModalRef;

    /**
     * 
     * @param modalService 
     * @param userService 
     * @param loginService 
     * @param router 
     */
    constructor(
        private modalService: MDBModalService,
        private userService: UserService,
        private loginService: LoginService,
        private router: Router) { }

    ngOnInit() {
        if (LocalStorage.isLoggedInNow() == false) {
            this.onLogout()
        }

        let tempObservable = this.userService.getName(LocalStorage.getLoginId())
        tempObservable.subscribe(data => {
            this.user_name = data["data"]["first_name"] + " " + data["data"]["last_name"]
        });
    }

    /**
     * Open user modal
     */
    openUserModal() {
        this.modalRef = this.modalService.show(UserModalComponent, {
            backdrop: false,
            keyboard: true,
            focus: false,
            show: true,
            ignoreBackdropClick: false,
            class: 'modal-side modal-top-right',
            containerClass: 'right',
            animated: true,
            data: {
                user_name: this.user_name
            }
        })

        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Log Out"){
                this.onLogout()
            }
        });
    } Î


    /**
     * @log out
     */
    onLogout(): void {
        this.loginService.logout()
        this.router.navigate([""]);
    }


}
