import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model'; 
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  onSelectedContact(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
   this.contacts = this.contactService.getContacts();
  }
  
}
