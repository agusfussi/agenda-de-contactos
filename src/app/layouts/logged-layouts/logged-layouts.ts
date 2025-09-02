import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logged-layouts',
  standalone: true,                    // <- importante si usás imports en el decorator
  imports: [CommonModule, RouterOutlet],
  templateUrl: './logged-layouts.html',
  styleUrls: ['./logged-layouts.scss']  // <- nota: "styleUrls" (plural)
})
export class LoggedLayouts {
  // estado y métodos del sidebar (ahora están en la misma clase que la plantilla)
  isSidebarOpen = false;

  openNav() {
    this.isSidebarOpen = true;
  }

  closeNav() {
    this.isSidebarOpen = false;
  }
}
