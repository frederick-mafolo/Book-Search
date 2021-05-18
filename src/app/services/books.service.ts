import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Book} from '../shared/book'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  private baseURL='http://openlibrary.org';
  private endpoint_search = 'search.json?q=';
  private endpoint_book_details='books'
  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';
// getConfig() {
//   return this.http.get(this.configUrl);

  
// }


// search(query: string): Observable<Book[]> {
//   return this.http
//     .get<{ items: Book[] }>(`${this.API_PATH}?q=${query}`)
//     .pipe(map(books => books.items || []));
// }

// getById(volumeId: string): Observable<Book> {
//   return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
// }

searchBook(searchText: string) : Observable<Book>{
  // now returns an Observable of Config
  return this.http.get<Book>(`${this.baseURL}/${this.endpoint_search}${searchText}`)
  .pipe(
    catchError(this.handleError<any>('getBook'))
  );
}

getBookById(bookID: string): Observable<Book>{
  return this.http.get<Book>(`${this.baseURL}/${this.endpoint_book_details}/${bookID}`+'.json')
  .pipe(
    catchError(this.handleError<any>('getBookDetails'))
  );
}

public handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead

    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  log(arg0: string) {
    throw new Error("Method not implemented.");
  }
}


