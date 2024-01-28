import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Welcome to WeLearn CMS', 'This is an automated welcome message.', 'System'),
    new Message('2', 'Meeting Reminder', 'Remember our meeting tomorrow at 10am.', 'Jane Doe'),
    new Message('3', 'Assignment Submission', 'The grades for your last assignment have been posted.', 'John Teacher')
  ];

  ngOnInit(): void {
    // Fetch messages from a service if available
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}