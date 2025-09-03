import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactos: Contact[] = [
    {
      firstName: 'Gonzalo',
      number: '15686184',
      email: 'gonza@email.com',
      lastName: 'Pérez',
      company: "true",
      addres: 'Av. Corrientes 1234, CABA',
      id: '1',
      image: ''
    },
    {
      firstName: 'Fabri',
      number: '1656768',
      email: 'fabri@email.com',
      lastName: 'Martínez',
      addres: 'Calle San Martín 456, Córdoba',
      company: "false",
      id: '2',
      image: ''
    },
    {
      firstName: 'Tomi',
      number: '5168767',
      email: 'tomi@email.com',
      lastName: 'Gómez',
      addres: 'Av. Belgrano 789, Rosario',
      company: "false",
      id: '3',
      image: ''
    },
    {
      firstName: 'Lucía',
      number: '114578963',
      email: 'lucia@email.com',
      lastName: 'Fernández',
      addres: 'Mitre 2020, Mendoza',
      company: "false",
      id: '4',
      image: ''
    },
    {
      firstName: 'Mariano',
      number: '119876543',
      email: 'mariano@email.com',
      lastName: 'Domínguez',
      addres: 'Ruta 9 Km 45, Buenos Aires',
      company: "true",
      id: '5',
      image: ''
    },
    {
      firstName: 'Camila',
      number: '117654321',
      email: 'camila@email.com',
      lastName: 'Lopez',
      addres: 'Urquiza 350, Salta',
      company: "false",
      id: '6',
      image: ''
    },
  ]

  getContacts(){}

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

