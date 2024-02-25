import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../contact.model'; 
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private subscription: Subscription;

  onSelectedContact(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactListChangedEvent.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
