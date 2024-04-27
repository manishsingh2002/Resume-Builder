import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-your-self',
  templateUrl: './your-self.component.html',
  styleUrl: './your-self.component.css',
})
export class YourSelfComponent implements OnInit {
  userForm: FormGroup; // Initialize the property

  constructor(private fb: FormBuilder) {
    // Initialize the form group here
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      github: ['', Validators.pattern('https?://.+')],
      linkedin: ['', Validators.pattern('https?://.+')],
    });
  }

  ngOnInit(): void {
    // Additional initialization logic (if needed)
  }

  submitForm(): void {
    if (this.userForm.valid) {
      // Handle form submission (e.g., send data to server)
      console.log(this.userForm.value);
    }
  }
}
