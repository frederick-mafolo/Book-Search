import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,ParamMap} from "@angular/router";
import { ServiceService } from '../services/books.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.scss']
})
export class SubpageComponent implements OnInit {
  id: number;
  private sub: any;
  bookDetails;
  author;
  title;
  constructor(private SpinnerService: NgxSpinnerService,private bookService:ServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params.bookId;
      this.author= params.author;
      this.title=params.bookTitle;
  
      this.bookService.getBookById(this.id.toString()).subscribe((data)=>{
      this.bookDetails=data;

      console.log(this.bookDetails)
  
  }) 
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
