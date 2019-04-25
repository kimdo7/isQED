import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingModalForms } from '../../landing-modal/landing-modal-forms';
import { LandingModalValidationErrors } from '../../landing-modal/landing-modal-validations-errors';
import { PasswordStrengthValidator } from 'src/app/validator/PasswordStrengthValidator';
import { LoginInfo } from '../../../../object/LoginInfo';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    validation_messages = LandingModalValidationErrors.message
    passwordStrengthValidator = PasswordStrengthValidator
    hidePassword1 = true
    hidePassword2 = true

    attempt = 0

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            console.log(params['login_id'])
            console.log("ppppppppppppppppppyeeeeessssssssss");

        });
        console.log("ppppppppppppppppppyeeeeessssssssss");
        this.test();
        var tempCode = "123456"

        // kirk start:
        // this.route.params.subscribe(params => {
        //     console.log(params) //log the entire params object
        //     console.log(params['id']) //log the value of id
        //   });


        // example observable isQED/frontend/src/app/component/user/user-header/user-header.component.ts
        // let tempObservable = this.userService.getName(LocalStorage.getLoginId())
        // tempObservable.subscribe(data => {
        //     this.user_name = data["data"]["first_name"] + " " + data["data"]["last_name"]
        // });

        // isQED/frontend/src/app/service/user/user.service.ts - for LoginInfo.service.ts
        // getName(login_id) {
        //     return this.http.get("http://localhost:8000/api/user/"+login_id)
        // }
        // kirk end:

        this.firstFormGroup = LandingModalForms.init_verify(this.formBuilder, tempCode)
        this.secondFormGroup = LandingModalForms.init_reset_password()
    }
     // kirk start:
    test(){
        console.log("ppppppppppppppppppyeeeeessssssssss");
    }
    // kirk end:

    resendPasscodeViaEmail() {

    }

    onSubmit() {
        alert("here")
    }

    onActivationCodeChange(newInput: string) {
        if (newInput.length == 6){
            this.attempt += 1
        }
    }
}

