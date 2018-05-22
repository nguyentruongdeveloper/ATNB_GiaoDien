import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import { Book } from '../../../model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private arrBook:Book[] =[];
  private objBook : Book = new Book();
  private Id:number=0;

  constructor(private _bookSharevice:BookService,private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
       this.Id= params['Id']as number;
    });
    this.loadBook();
  }
  private loadBook()
  {
      this._bookSharevice.getBookbyID(this.Id).subscribe((data) => {
      
        this.arrBook = data["data"] as Book[];
        this.objBook = this.arrBook[0];
      });
  }

}
