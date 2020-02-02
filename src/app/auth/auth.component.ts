import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    info = false;
    isLoading = false;
    error = '';

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    change = () => this.info = !this.info;

    onSubmit = (form: NgForm) => {
        if (!form.valid) {
            return;
        }
        this.isLoading = true;
        const {email, password} = form.value;
        this.authService.login(email, password).subscribe(
            resData => {
                this.isLoading = false;
                console.log(resData, 'resdata');
                this.router.navigate(['/like-rs']).then();
            }, error => {
                this.isLoading = false;
                console.log(error);
                this.error = 'რაცხა ნიტოა!';
            });
        console.log(form);
        form.reset();
    }
}
