import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div [style.border]="border">
      <h1>{{ content.title }}</h1>
      <img [src]="content.image" (click)="logContent()"/>
      <p>{{ content.description }}</p>
      <p>{{ content.creator }}</p>
      <p>{{ content.type }}</p>
      <p>{{ content.tags }}</p>
    </div>
  `,
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() content;
  border = '1px solid black';

  ngOnInit() {
    if (this.content.id === 1) {
      this.border = '2px solid black';
    }
  }

  logContent() {
    console.log(`Content id: ${this.content.id} title: ${this.content.title}`);
  }
}
