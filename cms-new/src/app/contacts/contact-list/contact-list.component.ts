import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', 'assets/images/jacksonk.jpg'),
    new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', 'assets/images/barzeer.jpg')
  ];

  ngOnInit(): void {
    // If you need to initialize or fetch contacts, do it here
  }

  onSelected(contact: Contact) {
    // Emit the event with the selected contact
  }
}