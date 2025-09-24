import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  [x: string]: any;

  auth = inject(AuthService)

  contactos: Contact[] = []

  async getContacts() {
    const res = await fetch("https://agenda-api.somee.com/api/Contacts",
      {
        headers: {
          Authorization: "Bearer " + this['authService'].token,
        }
      }
    )
    const resJson: Contact[] = await res.json()
    this.contactos = resJson
  }

  getContactById() { }


  async createContact(contactData: NewContact) {
    const nuevoContacto: Contact = {
      ...contactData,
      id: Math.random().toString()
    };
    const res = await fetch('https://agenda-api.somee.com/api/Contacts',
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.auth.token,
        },
        body: JSON.stringify(contactData)
      }
    );
    if (res.ok) {
      const resultado = await res.json();
      return true;
    } else {
      return false;
    }
  }

  editContact() { }

  deleteContact(id: string) {
    this.contactos = this.contactos.filter(contact => contact.id !== id)
  }

  setFavourite() { }
}

