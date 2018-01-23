import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';



type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userForm: FormGroup;

  newUser = true; // to toggle login or signup form
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
  };


  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,

  ) { }

  returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');


  ngOnInit() {
    this.buildForm();
  }

  toggleForm() {
    this.newUser = !this.newUser;
  }

  signup(input) {
    this.auth.emailSignUp(
      //  this.userForm.value['fullnames'],
       this.userForm.value['email'],
       this.userForm.value['password']
      );
  }

  login() {
    this.auth.emailLogin(
      this.userForm.value['email'],
      this.userForm.value['password']
    );

  }








  loginWithGoogle() {
this.auth.loginWithGoogle();
  }

  loginWithTwitter() {
    this.auth.loginWithTwitter();

  }

  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }



  buildForm() {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }
}
