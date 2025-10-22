import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts-service';
import { Contact, NewContact } from '../../interfaces/contact';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, Spinner],
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
  isLoading = false;

  async ngOnInit() {
    if (this.idContacto()) {
      this.contactoOriginal = await this.contactsService.getContactById(this.idContacto()!);
      this.form()?.form.patchValue({
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
    const wasFav = this.contactoOriginal!.isFavorite
    const newFaw = form.value.isFavorite
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

    let res;
    // const res = await this.contactsService.createContact(nuevoContacto);
    this.isLoading = true;
    res = await this.contactsService.editContact({ ...contactoEditado, id: this.idContacto()!.toString() });
    this.isLoading = false;
    if (!res) {
      this.errorEnBack = true;
      return
    };
    if (wasFav != newFaw){
      await this.contactsService.setFavourite(this.idContacto()!.toString())
    }
    this.router.navigate(["/contact-pages"]);
  }
}
