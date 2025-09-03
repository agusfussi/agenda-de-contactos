import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logged:boolean = false

  login(){
    this.logged = true
  }

  logeout(){
    this.logged = false
  }

}
