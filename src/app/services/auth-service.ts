import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Define LoginData type
export interface LoginData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  createUser(nuevoUser: any) {
    throw new Error('Method not implemented.');
  }
  router = inject(Router)
  logged: boolean = false;
  token: null | string = localStorage.getItem("token");

  async login(loginData: LoginData) {
    this.logged = true
    const res = fetch("https://agenda-api.somee.com/api/authentication/authenticate",
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
      }
    )
    if ((await res).ok) {
      const data = await (await res).json();
      this.token = data.token;
      localStorage.setItem("token", this.token ?? "");
      this.router.navigate(["/"])
    }
    console.log(res);
  }

  logeout() {
    this.logged = false
  }

}
