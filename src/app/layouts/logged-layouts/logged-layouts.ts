import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-logged-layouts',
  standalone: true,                    
  imports: [CommonModule, RouterOutlet],
  templateUrl: './logged-layouts.html',
  styleUrls: ['./logged-layouts.scss'] 
})
export class LoggedLayouts {
  // estado y métodos del sidebar (ahora están en la misma clase que la plantilla)
  isSidebarOpen = false;
  authService = inject(AuthService)

  openNav() {
    this.isSidebarOpen = true;
  }

  closeNav() {
    this.isSidebarOpen = false;
  }
}
