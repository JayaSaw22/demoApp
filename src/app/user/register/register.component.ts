import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      city : new FormControl()

    });

  }

  register(){
    console.log(this.registerForm.value);
    this.router.navigateByUrl('/grid')
  }

  // onSubmit = function (user) {
  //   console.log(user);
  // }

}


