import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import '../contentDb/movies.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies: Content[] = [
      {
        id: 1,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 2,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 3,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 4,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 5,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 6,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
      {
        id: 7,
        title: 'Accoustic guitar',
        description:
          "a guiatr which is used for melodys",
        type: 'Accoustic',
        tags: ['slow', 'melody'],
      },
    ];

    return { movies };
  }
  constructor() {}

  public genId(movies: Content[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 1000;
  }
}