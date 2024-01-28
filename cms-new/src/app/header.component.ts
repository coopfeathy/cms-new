import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>();

  onSelected(feature: string) {
    this.selectedFeatureEvent.emit(feature);
  }
}