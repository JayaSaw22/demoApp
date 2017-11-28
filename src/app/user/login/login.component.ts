import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators,FormArray  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  //  loginForm: FormGroup;
  constructor(private router: Router){}
  // constructor(private fb:FormBuilder){
  //   this.loginForm = fb.group({
  //     username : ["", Validators.required]
  //   })

  
  // }
  // createNewTask()
  // {
  //     console.log(this.loginForm.value)
  // }

  //form Group

  // loginForm = new FormGroup({
  //   username: new FormControl(),
  //   password : new FormControl()
  // });

  login(){
    console.log(this.loginForm.value)
    this.router.navigateByUrl('/register');
  }

  // username = new FormControl();
  // password = new FormControl();


  // loginForm : FormGroup;
  // post: any;
  // username:string;
  // password: string;

  // constructor( private fb :FormBuilder) {
  //   this.loginForm = fb.group({
  //     'username' : [null, Validators.required],
  //       'password': [null , Validators.compose([Validators.required,Validators.minLength(20),Validators.maxLength(25)])],
  //       'validate' :''
  //   })
  //  }

  //  addPost(post){
  //    this.username = post.username;
  //    this.password = post.password;
  //  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password : new FormControl()
    });
    
  }

  // onSubmit = function(user){
  //   console.log(user);
  // }

}

