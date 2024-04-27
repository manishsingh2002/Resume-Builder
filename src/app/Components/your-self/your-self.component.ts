import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-your-self',
  templateUrl: './your-self.component.html',
  styleUrl: './your-self.component.css',
})
export class YourSelfComponent implements OnInit {
  public formdata: any;
  shippeddata: any;
  finalvalue: any;
  public valueChangesSubscription: any;
  UserInfo = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    Linkdelin: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    Github: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    Aboutu: new FormControl('', [Validators.required]),
  });
  userdetail() {
    console.log(this.UserInfo.value);
  }
  ngOnInit() {
    this.formdata = this.UserInfo.value;
    console.log(this.formdata);
  }
  //
  get username() {
    return this.UserInfo.get('username');
  }
  get email() {
    return this.UserInfo.get('email');
  }
  get Linkdelin() {
    return this.UserInfo.get('Linkdelin');
  }
  get Github() {
    return this.UserInfo.get('Github');
  }
  get aboutu() {
    return this.UserInfo.get('pincode');
  }
}
