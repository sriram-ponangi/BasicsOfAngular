import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    optional: new FormGroup({
      comment: new FormControl()
    }),
    username: new FormControl('', [Validators.required,
       UsernameValidators.cannotContainSpace],
       UsernameValidators.shouldBeUnique),
    'password': new FormControl('', [Validators.required,
       Validators.minLength(6)])
  });

  login() {
    const data = this.form.value;
    console.log(data);
    if (data.username !== 'ram') {
      this.form.setErrors({
        invalidLogin: true
      });
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit() {
  }

}
