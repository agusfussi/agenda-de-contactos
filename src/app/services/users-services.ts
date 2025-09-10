import { Injectable } from "@angular/core";
import { NewUser } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersServices{
  async register(registerData:NewUser){
    return await fetch("",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}