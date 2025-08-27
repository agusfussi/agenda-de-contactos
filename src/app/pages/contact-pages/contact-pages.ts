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
      lastName: '',
      company: true,
      addres: ''
    },
    {
      firstName: 'Fabri',
      number: '1656768',
      email:'',
      lastName: '',
      addres: '',
    },
    {
      firstName: 'Tomi',
      number: '5168767',
      email:'',
      lastName: '',
      addres: '',
    },
  ]
}
