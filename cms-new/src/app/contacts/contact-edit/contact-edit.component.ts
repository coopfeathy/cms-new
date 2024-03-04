import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrl: './contact-edit.component.css'
})
export class ContactEditComponent {
  originalContact: Contact;
  contact: Contact;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string;

  constructor(
    private contactService: ContactsService,
    private router: Router,
    private route: ActivatedRoute) {
      
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newContact = new Contact(value.id, value.name, value.email, value.phone, value.imageUrl, this.groupContacts);
    if (this.editMode) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }
    this.router.navigate(['/contacts']);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (!this.id) {
        this.editMode = false;
        return;
      }
      this.originalContact = this.contactService.getContact(this.id);
      if (!this.originalContact) {
        return;
      }
      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));
      if (this.originalContact.group) {
        this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
      }
    });
  }

  onDrop(event: CdkDragDrop<Contact[]>) {
    if (event.previousContainer !== event.container) {
      const contactCopy = { ...event.item.data };
      this.groupContacts.push(contactCopy);
    }
  }
  
}
