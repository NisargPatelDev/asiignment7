import { Component, OnInit } from '@angular/core';
import { ContentService } from '../guitar.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  contentList: any[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getContentList().subscribe((data) => {
      this.contentList = data;
    });
  }
}
