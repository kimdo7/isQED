import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { LoginService } from 'src/app/service/user/login.service';
import { LocalStorage } from 'src/app/localStorage/localStorage';
import { MDBModalService, MDBModalRef } from 'ng-uikit-pro-standard';
import { UserModalComponent } from './modal/user-modal/user-modal.component';
import { Router } from '@angular/router';
import { IsActivateModalComponent } from './modal/is-activate-modal/is-activate-modal.component';
import { LoginInfo } from 'src/app/object/LoginInfo';

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
    modal_config: {}
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
        private localStore: LocalStorage,
        private router: Router) { }

    ngOnInit() {
        // Get our user info from LOCAL STORAGE
        // Which user do we remember?
        var user = this.localStore.loadUserInfo()
        var login = this.localStore.loadLoginInfo()
        this.user_name = "User"
        if (user.isLoggedIn(login)) {
            this.user_name = user.first_name + " " + user.last_name
        }
        this.initModalConfig()

        // Now get our user info from the SERVER
        // Are we actually logged in? Only the server knows for sure.
        this.loginService.refreshLoginInfo(loginInfo => {
            if (!loginInfo) {
                // server error. ignore because server didn't say we were logged out
                return
            }
            if (!loginInfo.isSignedIn) {
                // server is telling us we are logged out. we have to obey
                this.onLogout()
                return
            }
            if (!loginInfo.isEmailVerified) {
                // server is telling us we aren't activated
                this.displayActivateModal()
            }
            this.userService.refreshUserInfo(loginInfo.login_id, (err, userInfo) => {
                if (!userInfo) {
                    // server error. ignore
                    return
                }
                // server is giving us the user name. update it
                this.user_name = userInfo.first_name + " " + userInfo.last_name
                this.initModalConfig()
            })
        })
    }

    /**
     * @display if user did not activate their account
     */

    displayActivateModal() {
        this.modalRef = this.modalService.show(IsActivateModalComponent, {
            backdrop: false,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-full-height modal-top',
            containerClass: 'right',
            animated: true
        })
    }
    /**
     * Open user modal
     */
    openUserModal() {
        this.modalRef = this.modalService.show(UserModalComponent, this.modal_config)

        this.modalRef.content.action.subscribe((result: any) => {
            this.modalRef.hide()
            if (result == "Log Out") {
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

    initModalConfig() {
        this.modal_config = {
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
        }
    }

}
