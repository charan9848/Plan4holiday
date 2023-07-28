import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    this.FormData = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Fullname: ['', Validators.required],
      Comment: ['', Validators.required]
    });
  }

  
  onSubmit(formData: any) {
    if (this.FormData.valid) {
      
      console.log('Form submitted:', formData);

      this.submitted = true;
      this.FormData.reset();
    }
  }


}