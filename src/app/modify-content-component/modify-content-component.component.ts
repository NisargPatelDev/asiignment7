import { Component } from '@angular/core';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent {
  @Output() updatedContentAdded = new EventEmitter<Content>();
  @Input() guitar: Content[] = [];
  @Input() currentContent: Content | undefined;

  constructor() {}

  updatedContent: Content = {
    id: 0,
    title: '',
    description: '',
    imgURL: '',
    type: '',
    tags: [],
    director: '',
  };

  setCurrenGuitar(id: number) {
    console.log('click');
    const guitar = this.guitar.find((guitar) => guitar.id === id);
    if (guitar) {
      this.currentContent = guitar;
    }
  }

  addContent() {
    const clonedContent = Object.assign({}, this.updatedContent);
    clonedContent.id = Math.floor(Math.random() * 1000);
    this.updatedContentAdded.emit(clonedContent);
    this.updatedContent = {
      id: 0,
      title: '',
      description: '',
      imgURL: '',
      type: '',
      tags: [],
      director: '',
    };
  }
}
