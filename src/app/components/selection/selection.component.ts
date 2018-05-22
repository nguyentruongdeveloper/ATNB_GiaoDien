import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category';
import { AuthorService } from '../../service/author.service';
import { PublisherService } from '../../service/publisher.service';
import { Author } from '../../model/author';
import { Publisher } from '../../model/publisher';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  public arrCategory:Category[]=[];
  public arrAuthor:Author[]=[];
  public arrPublisher:Publisher[]=[];
  public arrBook:Book[]=[];
  private BookID :number=0;

  constructor(private _categoryService:CategoryService,
    private _authorService: AuthorService,
    private _publisherService : PublisherService, 
    private _bookService : BookService,
    private _urlRouter :Router
    
  ) { }

  ngOnInit() {
    this.loadAuthor();
    this.loadCategory();
    this.loadPublisher();
    this.loadNewBook();
  }
  public loadCategory()
  {
      this._categoryService.getAllCategory().  subscribe(
          (data) => {
    
            this.arrCategory = data["data"] as Category[];
          }
        )
     
     
  }
  public loadAuthor()
  {
      this._authorService.getAllAuthor().subscribe(
          (data) => {
    
            this.arrAuthor = data["data"] as Author[];
          }
        )
     
     
  }
  public loadPublisher()
  {
      this._publisherService.getAllPublisher().subscribe(
          (data) => {
    
            this.arrPublisher = data["data"] as Publisher[];
          }
        )
     
     
  }
  public loadNewBook()
  {
      this._bookService.getNewBook().subscribe(
          (data) => {
    
            this.arrBook = data["data"] as Book[];
          }
        )
     
     
  }
  public onView(event:any)
  {
    
    this._urlRouter.navigate(['/book-detail'], {queryParams: {Id:event.target.value}});
  }


}
