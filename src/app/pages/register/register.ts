import { Component, inject ,NgModule} from '@angular/core';
import { RouterModule, } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  authService = inject(AuthService)
User: any;
newUserForm: any;

  createContact(form: any) {
    const user: User = {
      firstName: form.firstName,
      lastName: form.lastName,
      userName: form.userName,
      password: form.password,
    }

    this.authService.createUser(user)
  }
}
