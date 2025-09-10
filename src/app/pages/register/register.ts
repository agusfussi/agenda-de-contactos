import { Component, inject, NgModule } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { UsersServices } from '../../services/users-services';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  authService = inject(AuthService)
  router = inject(Router);
  isLoading = false
  userService = inject(UsersServices);
  errorRegister = false;

  async register(form: any) {
    console.log(form.value);
    this.errorRegister = false;
    if (!form.email || !form.password) {
      this.errorRegister = true;
      return
    }
    this.isLoading = true
    const res = await this.userService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
    }
    this.isLoading = false
    this.errorRegister = true
  }
}
