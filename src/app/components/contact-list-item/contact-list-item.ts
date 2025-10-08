import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contacto = input.required<Contact>()

  contactService = inject(ContactsService)
  opendeletemodal() {
    Swal.fire({
      title: "Vas a borrar el contacto?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No eliminar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.contactService.deleteContact(this.contacto().id).then(() => {
          Swal.fire("Contacto eliminado correctamente", "", "success");
        });
      } else if (result.isDenied) {
        Swal.fire("No se a borrado el contacto", "", "info");
      }
    });
  }
}
