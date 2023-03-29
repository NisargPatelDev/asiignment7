import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  guitar: Content[] = [];
  public isAvailable = false;
  public searchTerm = '';

  constructor(private guitarService: GuitarService) {
    this.isAvailable = false;
    this.searchTerm = '';
  }

  ngOnInit(): void {
    this.guitarService.getMovies().subscribe(() => {
      this.guitar = guitar;
    });
  }

  handleInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onContentAdded(newContent: Content) {
    this.guitarService.addMovie(newContent).subscribe((guitar) => {
      this.guitar.push(guitar);
    });
  }

  updateContent(updatedContent: Content) {
    this.guitarService.updateMovie(updatedContent).subscribe((updatedGuitar) => {
      const index = this.guitar.findIndex(
        (guitar) => guitar.id === updatedGuitar.id
      );
      this.guitar[index] = updatedGuitar;
    });
  }

  searchContent() {
    console.log(this.searchTerm);
    this.guitar.forEach((guitar) => {
      if (guitar.title.includes(this.searchTerm)) {
        this.isAvailable = true;
      } else if (this.searchTerm === '') {
        this.isAvailable = false;
      } else {
        this.isAvailable = false;
      }
    });
  }
}
