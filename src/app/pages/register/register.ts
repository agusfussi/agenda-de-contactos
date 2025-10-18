import { Component, inject, NgModule } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { UsersServices } from '../../services/users-services';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule, Spinner],
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
    if (!form.value.email ||
      !form.value.password ||
      !form.value.password2 ||
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2) {
      this.errorRegister = true;
      return
    }
    this.isLoading = true;
    try {
      const res = await this.userService.register(form.value);
      console.log('Respuesta del servicio:', res);

      // 'res' may be a Fetch Response (has ok) or a custom object (has success)
      if (res && ((res as any).ok || (res as any).success)) {
        console.log('Navegando al login...');
        await this.router.navigate(['/login']);
      } else {
        this.errorRegister = true;
      }
    } catch (err) {
      console.error('Register error:', err);
      this.errorRegister = true;
    } finally {
      this.isLoading = false;
    }
  }
}
