import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model'; 

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})

export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor() {}

  ngOnInit(): void {
    // Temporary hardcoded data for display
    this.contact = new Contact(
      '1',
      'R. Kent Jackson',
      'jacksonk@byui.edu',
      '208-496-3771',
      'path-to-image.jpg'
    );
  }
}