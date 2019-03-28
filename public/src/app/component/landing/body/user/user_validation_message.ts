export class UserValidatorMessage {
    static message = {
        'first_name': [
            { type: 'required', message: 'First Name is required' },
            { type: 'minlength', message: 'Must be at least 2 characters long' },
            { type: 'pattern', message: 'Your username must contain only letters and white space' },
        ],
        'last_name': [
            { type: 'required', message: 'Last Name is required' },
            { type: 'minlength', message: 'Must be at least 2 characters long' },
            { type: 'pattern', message: 'Your username must contain only letters and white space' },
        ],
        'email': [
            { type: 'required', message: 'Email is required' },
            { type: 'email', message: 'Invalid Email Address' },
        ],
        'phone': [
            { type: 'required', message: 'Phone is required' },
            { type: 'pattern', message: 'Invalid Phone Number' },
        ],
        'password': [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Must be at least 8 characters long' },
            { type: 'pattern', message: 'Pattern problem' },
        ],
        'confirmPassword': [
            { type: 'required', message: 'Confirm Password is required' },
            { type: 'areEqual', message: 'Password mismatch' }
        ],
    }
}