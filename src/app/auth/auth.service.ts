import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FIREBASE_API_KEY = 'AIzaSyDW_g5fH3LG1oQv_MLhYIOfjdvAD-UG84U';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    this.http
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}`,
        { email: email, password: password, returnSecureToken: true }
      )
      .subscribe(resData => {
        console.log(resData);
      });
  }

  login(email: string, password: string) {}
}