import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documents = [
    { id: '1', name: 'Document 1', description: 'This is document 1', url: 'http://example.com/doc1' },
    { id: '2', name: 'Document 2', description: 'This is document 2', url: 'http://example.com/doc2' },
    { id: '3', name: 'Document 3', description: 'This is document 3', url: 'http://example.com/doc3' },
    { id: '4', name: 'Document 4', description: 'This is document 4', url: 'http://example.com/doc4' },
    { id: '5', name: 'Document 5', description: 'This is document 5', url: 'http://example.com/doc5' },
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
