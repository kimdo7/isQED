import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';

export class LandingModalForms {

    static init_contact_us_form(formBuilder) {
        return formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],
            email: ['', [
                Validators.required,
                Validators.email,
                // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]],
            message: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                ]
            ],
        })
    }

    static init_register_form(formBuilder) {
        return formBuilder.group({
            first_name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],
            last_name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.pattern('^[A-Za-z ]+$')
                ]
            ],
            email: ['', [Validators.required, Validators.email]],
            password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
                ]
            ],
        })
    }

    static init_login_form(formBuilder) {
        return formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
                ]
            ],
        })
    }

    static init_forgot_password_form(formBuilder) {
        return formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        })
    }

    static init_verify(formBuilder, verify_code) {
        
        var regex = new RegExp(verify_code, 'i')
        return formBuilder.group({
            code: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6),
                Validators.pattern('^[0-9]*$'),
                Validators.pattern(regex)
                // Validators.
            ]],
        })
    }

    static init_reset_password() {
        return new FormGroup({
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
            ])),
            confirm_password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
            ]))
        }, (formGroup: FormGroup) => {
            return PasswordValidator.areEqual(formGroup);
        });
    }
}