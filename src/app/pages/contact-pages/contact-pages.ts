import { Component, inject } from '@angular/core';
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
export class ContactPages {

 authService = inject(AuthService)

 contactService = inject(ContactsService)
 
 createContact(form:any){
    const nuevoContacto: NewContact ={
      firstName: form.firstName,
      lastName: form.lastName,
      addres: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isFavorite: form.isFavorite
    }

    this.contactService.createContact(nuevoContacto)
}
}
