import { Component, inject, input, viewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactsService } from '../../services/contacts-service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'
})
export class ContactDetailsPage {
  loggedService = inject(AuthService)
  contactsService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContacto = input<number>();
  contactoOriginal: Contact | undefined = undefined;
  form = viewChild<NgForm>('newContactForm');
  

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


 

}
