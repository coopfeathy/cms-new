import { Component } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent {
  document: Document;

  onCancel() {
    // Add your logic here
  }
}
