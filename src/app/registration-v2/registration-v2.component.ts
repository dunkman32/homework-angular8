import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

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
        private authService: AuthService,
        private router: Router) {
    }

    onSubmit = (form: NgForm) => {
        if (!form.valid) {
            return;
        }
        this.isLoading = true;
        const {email, password, ID, user, telephone, confirmPassword} = form.value;

        if (password !== confirmPassword) {
            this.error = 'პაროლები არ დაემთხვა';
            return;
        }
        this.authService.signup(email, password, ID, user, telephone).subscribe(
            resData => {
                this.isLoading = false;
                console.log(resData, 'resdata');
                this.router.navigate(['/auth']).then();
            }, error => {
                this.isLoading = false;
                console.log(error);
                this.error = 'რაცხა ნიტოა!';
            });
        console.log(form.value);
        form.reset();
    };
}
