import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  [x: string]: any;

  contactos: Contact[] = []

  async getContacts(){
    const res = await fetch("https://agenda-api.somee.com/api/contacts",
      {
        headers:{
          Authorization: "Bearer "+this['authService'].token,
        }
      }
    )
  }

  getContactById(){}

  createContact(contactData: Omit<Contact, 'id'>){
    const nuevoContacto: Contact = {
      ...contactData,
      id: Math.random().toString()
    };

    this.contactos.push(nuevoContacto);
  }

  editContact(){}

  deleteContact(id:string){
    this.contactos = this.contactos.filter(contact => contact.id !== id)
  }

  setFavourite(){}
}

