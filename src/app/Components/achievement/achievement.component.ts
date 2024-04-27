import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css',
})
export class AchievementComponent implements OnInit {
  public formdata: any;
  shippeddata: any;
  finalvalue: any;
  public valueChangesSubscription: any;
  UserInfo = new FormGroup({
    CertificateName: new FormControl('', [Validators.required]),
    CertificateLink: new FormControl('', [Validators.required]),
  });
  userdetail() {
    console.log(this.UserInfo.value);
  }

  ngOnInit() {
    this.formdata = this.UserInfo.value;
    console.log(this.formdata);
  }
  //
  get CertificateName() {
    return this.UserInfo.get('CertificateName');
  }
  get CertificateLink() {
    return this.UserInfo.get('CertificateLink');
  }
}
