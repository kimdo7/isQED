import { FormBuilder, Validators } from '@angular/forms';

export class LandingModalForms  {
    
    static init_contact_us_form(formBuilder){
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
                ]
            ],
        })
    }

    static init_register_form(formBuilder){
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

    static init_login_form(formBuilder){
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

    static init_forgot_password_formn(formBuilder){
        return formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        })
    }
}