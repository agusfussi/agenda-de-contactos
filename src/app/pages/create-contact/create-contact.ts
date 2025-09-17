import { Component, inject } from '@angular/core';
import { ContactListItem } from "../../components/contact-list-item/contact-list-item";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-create-contact',
  imports: [ContactListItem, CommonModule, FormsModule,],
  templateUrl: './create-contact.html',
  styleUrl: './create-contact.scss'
})
export class CreateContact {
contactService: any;
createContact(arg0: any) {
throw new Error('Method not implemented.');
}

contact = inject(ContactsService)

}
