import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggeado: boolean = false;
  router = inject(Router);
  token: null | string = localStorage.getItem("token");
  createUser(nuevoUser: any) {
    throw new Error('Method not implemented.');
  }

  async login(loginData: any) {
    const res = await fetch("https://agenda-api.somee.com/api/authentication/authenticate",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      }
    )
   if (res.ok) {
      this.router.navigate(["/"])
      this.token = await res.text();
      localStorage.setItem("token", this.token);
    }
    console.log("Respuesta del back", res);
  }


  logeout() {
    this.token = null
    this.router.navigate(["/login"])
  }

  getToken() {
    return this.token;
  }

}
