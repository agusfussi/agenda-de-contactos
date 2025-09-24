import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts-service';
import { Contact, NewContact } from '../../interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule],
  templateUrl: './edit-contact.html',
  styleUrl: './edit-contact.scss'
})
export class EditContact implements OnInit {
  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<number>();
  contactoOriginal: Contact | undefined = undefined;
  form = viewChild<NgForm>('newContactForm');

  async ngOnInit() {
    if (this.idContacto()) {
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      this.form()?.setValue({
        firstName: this.contactoOriginal!.firstName,
        lastName: this.contactoOriginal!.lastName,
        address: this.contactoOriginal!.address,
        email: this.contactoOriginal!.email,
        image: this.contactoOriginal!.image,
        number: this.contactoOriginal!.number,
        company: this.contactoOriginal!.company,
        isFavourite: this.contactoOriginal!.isFavorite
      })
    }
  }


  async editContact(form: NgForm) {
    this.errorEnBack = false;
    const contactoEditado: Contact = {
      id: this.contactoOriginal!.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: form.value.isFavorite
    }

    const res = await this.contactsService.editContact({ ...contactoEditado, id: this.idContacto()!.toString() });
    if (!res) {
      this.errorEnBack = true;
      this.router.navigate(["/contact-pages"]);
    };
  }
}
