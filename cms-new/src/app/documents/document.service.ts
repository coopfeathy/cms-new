import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent = new Subject<Document[]>();
  private maxDocumentId: number;
  private documentsListClone: Document[]
  private documents: Document[] = [];

  constructor(private http: HttpClient) {
    this.maxDocumentId = this.getMaxId();
  }

  storeDocuments() {
    const documents = JSON.stringify(this.documents);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put('https://cpf-cms-bf4f3-default-rtdb.firebaseio.com/documents.json', documents, {headers: headers})
      .subscribe(() => {
        this.documentListChangedEvent.next(this.documents.slice());
      });
  }

  getMaxId(): number {
    let maxId = 0;
    for (let document of this.documents) {
      let currentId = Number(document.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }
  
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments();
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }
  
    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }
  
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments();
  }

  getDocuments() {
    this.http.get('https://cpf-cms-bf4f3-default-rtdb.firebaseio.com/documents.json')
      .subscribe(
        //success method
        {next: (documents: Document[]) => {
        this.documents = documents
        this.maxDocumentId = this.getMaxId()

        this.documents.sort(this.compare)

        this.documentsListClone = this.documents.slice()
        this.documentListChangedEvent.next(this.documentsListClone);
        },

        error: (e) => {
          console.log(e)
        }}
      )
  }

  compare(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  getDocument(id: string): Document {
    return this.documents.find((d) => d.id === id);
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
  
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
  
    this.documents.splice(pos, 1);
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
    this.storeDocuments();
  }
}