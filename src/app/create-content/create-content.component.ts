import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {
  id: string;
  title: string;
  type: string;

  @Output() addContentEvent = new EventEmitter<object>();

  addContent(): void {
    const newContent = {
      id: this.id,
      title: this.title,
      type: this.type
    };

    const promise = new Promise((resolve, reject) => {
      this.addContentEvent.emit({ resolve, reject, newContent });
    });

    promise.then(() => {
      this.id = '';
      this.title = '';
      this.type = '';
      console.log(`Successfully added ${newContent.title}!`);
    }).catch(() => {
      console.error(`Failed to add ${newContent.title}.`);
    });
  }
}
