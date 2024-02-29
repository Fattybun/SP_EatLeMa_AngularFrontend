import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  userSignIn() {}
  
  userSignUp(body: any) {
    return this.http.post('http://localhost:5000/admin/auth/signup', body)
  }

  userLogout() {}

  isLoggedIn() {}

  resetPassword() {}

}
