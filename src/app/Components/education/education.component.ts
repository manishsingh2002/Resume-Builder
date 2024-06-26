import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  public formdata: any;
  shippeddata: any;
  finalvalue: any;
  public valueChangesSubscription: any;
  UserInfo = new FormGroup({
    CollegeName: new FormControl('', [Validators.required]),
    DegreeName: new FormControl('', [Validators.required]),
    CGPA: new FormControl('', [Validators.required]),
    months: new FormControl('', [Validators.required]),
  });
  userdetail() {
    console.log(this.UserInfo.value);
  }

  ngOnInit() {
    this.formdata = this.UserInfo.value;
    console.log(this.formdata);
  }
  //
  get CollegeName() {
    return this.UserInfo.get('CompanyName');
  }
  get DegreeName() {
    return this.UserInfo.get('email');
  }
  get CGPA() {
    return this.UserInfo.get('Linkdelin');
  }
  get months() {
    return this.UserInfo.get('Github');
  }
}
