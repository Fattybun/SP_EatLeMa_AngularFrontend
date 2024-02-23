import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  userSignIn() {
    fetch('http://localhost:3001/signin', { method: "POST" })
      .then(response => response.json())
      .then(data => data)
      .catch((error) => console.log(`Error: ${error}`));
  }
  
  userSignUp() {}

  userLogout() {}

  isLoggedIn() {}

  resetPassword() {}

}
