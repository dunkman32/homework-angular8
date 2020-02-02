import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from '../auth/user.model';

export interface AuthResponseData {
  token: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  user = new Subject<User>();
  isAuthenticated = false;
  token = '';
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('userData');
    this.isAuthenticated = !!this.token;
  }

  signup(email: string, password: string, ID: string, username: string, telephone: string) {
    return this.http
      .post<AuthResponseData>(
        '/api/auth/register',
        {
          email,
          password,
          ID,
          username,
          telephone
        }
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        '/api/auth/login',
        {
          email,
          password,
        }
      ).pipe(catchError(this.handleError), tap(data => {
        const parsedUser = this.parseJwt(data.token);
        console.log(parsedUser);
        const {email, _id, iat, exp} = parsedUser;
        this.handleAuthentication(email, _id, data.token, exp);
        // const expTime = new Date(new Date().getTime())
      }));
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }


  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn);
    const user = new User(email, userId, token, expirationDate);
    console.log(user, '-------------------');
    this.user.next(user);
    this.autoLogout(expiresIn);
    localStorage.setItem('userData', JSON.stringify(user));
  }


  private parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError('An unknown error occurred!');
  }

}
