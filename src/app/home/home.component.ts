import { Component, ElementRef, AfterViewInit, ViewChild ,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {fromEvent,Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { ServiceService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 books;
 hasData=false;

  constructor(private bookService:ServiceService,private router: Router, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  // @ViewChild('input', {static: false}) input: ElementRef;

  // ngAfterViewInit() {
  //           // server-side search
  //       fromEvent(this.input.nativeElement,'keyup')
  //           .pipe(
  //               debounceTime(150),
  //               distinctUntilChanged(),
  //               tap(async (event:KeyboardEvent) => {
  //                 const bo:Observable<Book> = 
  //                 this.bookService.searchBook(this.input.nativeElement.value);

  //                 const books:Book = await bo.toPromise();
  //                 const bookid = books.docs[0].author_key[0];
  //                 console.log(`all books: ${books}`);

  //                 const book = await this.bookService.getBookById(bookid).toPromise();
  //                 console.log(`book: ${JSON.stringify(book)}`);
  //               })
  //           )
  //           .subscribe();
  // }

OnSearch(searchText){
  this.SpinnerService.show(); 
  this.bookService.searchBook(searchText.replace(/\s/g,'+')).subscribe((data)=>{
    console.log(data)
  
    this.hasData=true;
    this.books=data;
    this.SpinnerService.hide();
    console.log(this.hasData)
  })
}

goToBookDetails(id,name,title) {

  let queryParams={bookId:id,author:name,bookTitle:title}
  this.router.navigate(['/subpage', queryParams]);
}

}
