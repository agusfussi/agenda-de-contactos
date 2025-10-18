import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  [x: string]: any;
  readonly URL_BASE = "https://agenda-api.somee.com/api/contacts";

  auth = inject(AuthService)

  contactos: Contact[] = []

  ////////////////////////////////////////////////////////////////////////////
  async getContacts() {
    const res = await fetch(this.URL_BASE,
      {
        headers: {
          Authorization: "Bearer " + this.auth.token,
        }
      }
    )
    const resJson: Contact[] = await res.json()
    this.contactos = resJson
  }

  //////////////////////////////////////////////////////////////////////
  async getContactById(id: string | number) {
    const res = await fetch(this.URL_BASE + "/" + id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.auth.token,
        },
      });
    if (!res.ok) return undefined;
    const contact: Contact = await res.json();
    return contact;
  }

  //////////////////////////////////////////////////////////////////////
  async createContact(contactData: NewContact) {
    const nuevoContacto: Contact = {
      ...contactData,
      id: Math.random().toString()
    };
    const res = await fetch(this.URL_BASE,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.auth.token,
          'Content-Type': 'application/json',
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

  /////////////////////////////////////////////////////////////////
  async editContact(contact: Contact) {

    const res = await fetch(this.URL_BASE + "/" + contact.id,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Bearer " + this.auth.token,
        },
        body: JSON.stringify(contact)
      }
    );
    if (!res.ok) return null;
    if (res.status === 204) {
      this.contactos = this.contactos.map((c) =>
        c.id === contact.id ? contact : c
      );
      return contact;
    }
    const resultado: Contact = await res.json();
    this.contactos = this.contactos.map((c) =>
      c.id === resultado.id ? resultado : c
    );
    return resultado
  }
  ////////////////////////////////////////////////////////////////////////////////

  async deleteContact(id: string | number) {
    const res = await fetch(this.URL_BASE + "/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.auth.token,
        },
      });
    if (!res.ok) return;
    this.contactos = this.contactos.filter(contact => contact.id !== id);
    return true;
    this.contactos = this.contactos.filter(contact => contact.id !== id);
  }

  ////////////////////////////////////////////////////////////////////////////
  async setFavourite(id: string | number) {
    const res = await fetch(this.URL_BASE + "/" + id + "favorite",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.auth.token,
        },
      });
    if (!res.ok) return;
    this.contactos = this.contactos.map(contact => {
      if (contact.id === id) return {
        ...contact, isFavorite: !contact.isFavorite
      };
      return contact
    });
    return true
  }
}