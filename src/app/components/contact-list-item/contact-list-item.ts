import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-list-item',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
 contacto = input.required<Contact>()

 contactService = inject(ContactsService)
}
