import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contact'


@Component({
  selector: 'app-contact-pages',
  imports: [RouterModule,  ContactListItem],
  templateUrl: './contact-pages.html',
  styleUrl: './contact-pages.scss'
})
export class ContactPages {
  contactos: Contact[] = [
     {
    firstName: 'Gonzalo',
    number: '15686184',
    email: 'gonza@email.com',
    lastName: 'Pérez',
    company: true,
    addres: 'Av. Corrientes 1234, CABA'
  },
  {
    firstName: 'Fabri',
    number: '1656768',
    email: 'fabri@email.com',
    lastName: 'Martínez',
    addres: 'Calle San Martín 456, Córdoba',
    company: false
  },
  {
    firstName: 'Tomi',
    number: '5168767',
    email: 'tomi@email.com',
    lastName: 'Gómez',
    addres: 'Av. Belgrano 789, Rosario',
    company: false
  },
  {
    firstName: 'Lucía',
    number: '114578963',
    email: 'lucia@email.com',
    lastName: 'Fernández',
    addres: 'Mitre 2020, Mendoza',
    company: false
  },
  {
    firstName: 'Mariano',
    number: '119876543',
    email: 'mariano@email.com',
    lastName: 'Domínguez',
    addres: 'Ruta 9 Km 45, Buenos Aires',
    company: true
  },
  {
    firstName: 'Camila',
    number: '117654321',
    email: 'camila@email.com',
    lastName: 'Lopez',
    addres: 'Urquiza 350, Salta',
    company: false
  },
  ]
}
