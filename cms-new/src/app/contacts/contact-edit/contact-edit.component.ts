import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent {
  contact: Contact;
  groupContacts: Contact[] = []; 
  
  constructor() {
  }

  onCancel() {

  }
}
