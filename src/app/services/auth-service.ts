import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  createUser(nuevoUser: any) {
    throw new Error('Method not implemented.');
  }
  
  logged:boolean = false

  login(){
    this.logged = true
  }

  logeout(){
    this.logged = false
  }

}
