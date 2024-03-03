import { Component } from '@angular/core';
import { Document } from '../document.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent {
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;

  onSubmit(form: NgForm) {
    // Add your logic here
  }

  onCancel() {
    // Add your logic here
  }
}
