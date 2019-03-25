import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from 'src/app/validator/PasswordValidator';

@Component({
	selector: 'app-sign-in-default',
	templateUrl: './sign-in-default.component.html',
	styleUrls: ['./sign-in-default.component.css']
})
export class SignInDefaultComponent implements OnInit {

	user_form: FormGroup



	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.initUserForm()
	}

	initUserForm() {
		this.user_form = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]]
		});
	}

	onSignIn() {
		// this.submitted = true;

		// stop here if form is invalid
		if (this.user_form.invalid) {
			return;
		}

		alert('SUCCESS!! :-)')
	}

	/**
	 * *Validation  Message*
	 */


	validation_messages = {
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


	/**
	 * Sample for Sylvia
	 */
	firstFormGroup: FormGroup
	test() {
		this.firstFormGroup = this.formBuilder.group({
			first_name: ['', [
				Validators.required,
				Validators.minLength(2),
				Validators.pattern('^[A-Za-z ]+$')]
			],
			last_name: ['', [
				Validators.required,
				Validators.minLength(2),
				Validators.pattern('^[A-Za-z ]+$')]
			],

			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			confirm_password: ['', [Validators.required, Validators.minLength(8)]],
			phone: ['', [
				Validators.required,
				Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
			]],


		} , (formGroup: FormGroup) => {
			return PasswordValidator.areEqual(formGroup);
		});
	}

}