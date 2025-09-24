import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contacts-service';
import { Contact, NewContact } from '../../interfaces/contact';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-pages',
  imports: [RouterModule, ContactListItem, FormsModule],
  templateUrl: './contact-pages.html',
  styleUrl: './contact-pages.scss'
})
export class ContactPages implements OnInit {
 ngOnInit(): void {
    this.contactService.getContacts();
 }

 authService = inject(AuthService)

 contactService = inject(ContactsService)
}
