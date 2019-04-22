import { FormBuilder, Validators } from '@angular/forms';

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
            email: ['', [Validators.required, Validators.email]],
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

    static init_verify(formBuilder) {
        return formBuilder.group({
            code: ['', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6),
                Validators.pattern('^[0-9]*$')
            ]],
        })
    }

    static init_reset_password(formBuilder) {
        return formBuilder.group({
            password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
                ]
            ],
            confirm_password: ['',
                [
                    Validators.required,
                    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}')
                ]
            ],
        })
    }
}