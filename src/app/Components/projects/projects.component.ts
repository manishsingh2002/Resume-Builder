import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  public formdata: any;
  shippeddata: any;
  finalvalue: any;
  public valueChangesSubscription: any;
  UserInfo = new FormGroup({
    ProjectName: new FormControl('', [Validators.required]),
    ProjectStack: new FormControl('', [Validators.required]),
    ProjectLink: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
  });
  userdetail() {
    console.log(this.UserInfo.value);
  }

  ngOnInit() {
    this.formdata = this.UserInfo.value;
    console.log(this.formdata);
  }
  //
  get ProjectName() {
    return this.UserInfo.get('CompanyName');
  }
  get ProjectStack() {
    return this.UserInfo.get('email');
  }
  get ProjectLink() {
    return this.UserInfo.get('Linkdelin');
  }
  get Description() {
    return this.UserInfo.get('Github');
  }
}
