import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.css',
})
export class ProfessionalExperienceComponent implements OnInit {
  public formdata: any;
  shippeddata: any;
  finalvalue: any;
  public valueChangesSubscription: any;
  UserInfo = new FormGroup({
    CompanyName: new FormControl('', [Validators.required]),
    Position: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    months: new FormControl('', [Validators.required]),
    aboutproject: new FormControl('', [Validators.required]),
  });
  userdetail() {
    console.log(this.UserInfo.value);
  }
  ngOnInit() {
    this.formdata = this.UserInfo.value;
    console.log(this.formdata);
  }
  //
  get CompanyName() {
    return this.UserInfo.get('CompanyName');
  }
  get Position() {
    return this.UserInfo.get('email');
  }
  get location() {
    return this.UserInfo.get('Linkdelin');
  }
  get months() {
    return this.UserInfo.get('Github');
  }
  get aboutproject() {
    return this.UserInfo.get('aboutproject');
  }
}
