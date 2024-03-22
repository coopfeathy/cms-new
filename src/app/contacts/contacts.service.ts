import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactSelectedEvent = new EventEmitter<Contact>();
  contactListChangedEvent = new Subject<Contact[]>();

  constructor(private http: HttpClient) {
    this.getContacts();
  }

  private contacts: Contact[] = [];

  getContacts() {
    this.http.get('https://cpf-cms-bf4f3-default-rtdb.firebaseio.com/contacts.json')
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }

  storeContacts() {
    const contacts = JSON.stringify(this.contacts);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put('https://cpf-cms-bf4f3-default-rtdb.firebaseio.com/contacts.json', contacts, {headers: headers})
      .subscribe(() => {
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }

  getContact(id: string): Contact {
    return this.contacts.find((c) => c.id === id);
  }

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }
  
    this.contacts.push(newContact);
    let contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
    this.storeContacts();
  }
  
  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }
  
    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }
  
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    let contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
    this.storeContacts();
  }
  
  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }
  
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
  
    this.contacts.splice(pos, 1);
    let contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
    this.storeContacts();
  }
}
