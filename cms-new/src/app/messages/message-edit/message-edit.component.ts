import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../message.model'; // Update the path as needed

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  subject: string = ''; // Initialize to an empty string
  message: string = ''; // Initialize to an empty string
  @Output() addMessageEvent = new EventEmitter<Message>();

  onSendMessage() {
    const id = Date.now().toString();
    const newMessage = new Message(
      id,
      this.subject,
      this.message,
      'Name' // Replace with the sender's name or a dynamic property
    );
    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  onClear() {
    this.subject = '';
    this.message = '';
  }
}