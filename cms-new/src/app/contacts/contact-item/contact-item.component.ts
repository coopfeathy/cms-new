import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  @Input() contact: Contact;
  @Output() selected = new EventEmitter<void>(); // Emitting an event without value

  onSelect() {
    this.selected.emit(); // Emit an event when the contact item is clicked
  }
}