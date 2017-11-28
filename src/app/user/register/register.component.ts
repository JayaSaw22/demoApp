import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  // registerForm = new FormGroup({
  //   username: new FormControl(),
  //   email : new FormControl(),
  //   address: new FormControl(),

  // });

  // login(){
  //   console.log(this.registerForm.value)
  // }

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      city : new FormControl()

    });

  }
  onSubmit = function (user) {
    console.log(user);
  }
}


