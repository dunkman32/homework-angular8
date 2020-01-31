import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  idNumber: any = '';
  name: any = '';
  tel: any = '';
  mail: any = '';
  password: any = '';
  confirmPassword: any = '';

  constructor() {
  }

  ngOnInit() {
  }

  checkIdNumberLength = () => this.idNumber.length === 11 || this.idNumber.length === 0;

  arePasswordsMatch = () => this.password === this.confirmPassword;

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.mail).toLowerCase());
  }

  onSubmit(form: NgForm) {
    console.log(form, '-------');
  }

}
