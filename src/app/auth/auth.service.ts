import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { alert } from 'tns-core-modules/ui/dialogs'

const FIREBASE_API_KEY = 'AIzaSyDW_g5fH3LG1oQv_MLhYIOfjdvAD-UG84U';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}`,
      { email: email, password: password, returnSecureToken: true }
    ).pipe(catchError(errorResponse => {
      this.handleError(errorResponse.error.error.message);
      return throwError(errorResponse);
    }));
  }

  login(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE_API_KEY}`,
      { email: email, password: password, returnSecureToken: true }
    ).pipe(catchError(errorResponse => {
      this.handleError(errorResponse.error.error.message);
      return throwError(errorResponse);
    }));
  }

  private handleError(errorMessage: string) {
    switch (errorMessage) {
      case 'EMAIL_EXISTS': 
        alert('This email address exists already');
        break;
      case 'INVALID_PASSWORD': 
        alert('This password is invalid');
        break;
      default: 
        alert('Authentication failed, check your credentials');
        break;  
    }
    console.log(errorMessage);
  }
}