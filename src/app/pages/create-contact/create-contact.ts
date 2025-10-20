import { Component, inject } from '@angular/core';
import { ContactListItem } from "../../components/contact-list-item/contact-list-item";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsService } from '../../services/contacts-service';
import { AuthService } from '../../services/auth-service';
import { NewContact } from '../../interfaces/contact';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-create-contact',
  imports: [CommonModule, FormsModule, RouterModule, Spinner],
  templateUrl: './create-contact.html',
  styleUrl: './create-contact.scss'
})
export class CreateContact {
  [x: string]: any;
  ngOnInit(): void {
    this.contactService.getContacts()
  }
  router = inject(Router)
  authService = inject(AuthService)
  contactService = inject(ContactsService)
  isLoading = false;

  async createContact(form: any) {
    this.isLoading = true;
    const nuevoContacto: NewContact = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isFavorite: form.isFavorite
    }
    try {
      await this.contactService.createContact(nuevoContacto);
      // Una vez creado, navegamos
      this.router.navigate(["/contact-pages"]);
    } catch (error) {
      console.error("Error creando contacto:", error);
    } finally {
      this.isLoading = false;
    }
  }
}