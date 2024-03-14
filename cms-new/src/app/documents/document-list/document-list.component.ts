import { Component, OnInit, OnDestroy } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private documentService: DocumentService) {
    this.documentService.getDocuments();
   }

  ngOnInit(): void {
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe((documentList: Document[]) => {
          this.documents = documentList
        }
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}