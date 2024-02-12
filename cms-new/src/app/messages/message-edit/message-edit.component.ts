import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message.model'; 

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {  
  subject: string;
  msgText: string;

  constructor(private messageService: MessageService) { }

  onSendMessage() {
    const newMessage = new Message('1', this.subject, this.msgText, '2');
    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subject = '';
    this.msgText = '';
  }
}