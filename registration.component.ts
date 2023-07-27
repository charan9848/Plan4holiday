import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{
  signUpForm!: FormGroup;
  submitted= false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(signUpForm:any) {
    if (this.signUpForm.valid) {
      // Form is valid, perform sign-up logic here (e.g., API call)
      console.log('submitted:', this.signUpForm);
alert("Account Created Successfully!, Now Please Login to use our services.")
      this.submitted = true;
      this.signUpForm.reset();
    }
  }

}