import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';

interface signinform {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  
})

export class SigninComponent   {

  LoginForm!: FormGroup;
  Logins: signinform[] = [];
  errorMessage: string = '';


  constructor(private router: Router) { // Inject Router into the constructor
    this.createForm();
  }

  createForm() {
    this.LoginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      const email = this.LoginForm.get('email')!.value;
      const password = this.LoginForm.get('password')!.value;
      

      
      if ((email === 'sumanth@gmail.com' && password === '123')||(email === 'Lily' && password === 'lol')||(email === 'charan@gmail.com' && password === '123')||(email === 'ravi@gmail.com' && password === '123')) {
        console.log('Login successful');
        this.errorMessage = ''; // Clear any previous error message

       
         
        this.LoginForm.reset();
        this.router.navigateByUrl('/packages');
      }
      
      else {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    }
  }

}
