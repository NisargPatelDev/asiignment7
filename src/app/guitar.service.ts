import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentDb } from '../app/contentDb';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  getContentList(): Observable<any> {
    // Return the content array using the observable pattern
    return of(contentDb);
  }

  getContentById(id: number): Observable<any> {
    // Find the content item with the specified id and return it using the observable pattern
    const contentItem = contentDb.find((item) => item.id === id);
    return of(contentItem);
  }
}
