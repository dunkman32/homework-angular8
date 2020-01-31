import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-registration-v2',
  templateUrl: './registration-v2.component.html',
  styleUrls: ['./registration-v2.component.css']

})
export class RegistrationV2Component {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    // private authService: AuthService,
    private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    // let authObs: Observable<AuthResponseData>;
    //
    // this.isLoading = true;
    //
    // if (this.isLoginMode) {
    //   authObs = this.authService.login(email, password);
    // } else {
    //   authObs = this.authService.signup(email, password);
    // }
    //
    // authObs.subscribe(
    //   resData => {
    //     console.log(resData);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']);
    //   },
    //   errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );

    form.reset();
  }
}
