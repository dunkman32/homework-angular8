import {Component, OnInit} from '@angular/core';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  info = false;

  constructor() {
  }

  ngOnInit() {
  }

  change = () => this.info = !this.info;

  onSubmit = (form: Form) => {
    console.log(form);
  }
}
