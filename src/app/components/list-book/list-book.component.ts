import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../model/category';
import { Author } from '../../model/author';
import { Publisher } from '../../model/publisher';
import { Book } from '../../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  private Id:number=0;
  private Type:string="";
  private arrBook:Book[]=[];
  private arrCategory:Category[]=[];
  private arrAuthor:Author[]=[];
  private arrPublisher:Publisher[]=[];

  constructor(private _bookSharevice:BookService,private route: ActivatedRoute, private _urlRouter :Router) {  }
  ngOnChanges()
  {
   

  }
  ngAfterViewInit()
  {
    
  }
  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {
       this.Type= params['Type']as string ;
      
       if(this.Type=="Category")
       {
        this.Id= params['CategoryID']as number;
        this._bookSharevice.getBookByCategory(this.Id).subscribe(data=>  this.arrBook = data["data"] as Book[]);

       }
       if(this.Type=="Author")
       {
        this.Id= params['AuhtorID']as number;
        this._bookSharevice.getBookByAuthor(this.Id).subscribe(data=>this.arrBook = data["data"] as Book[]);

       }
       if(this.Type=="Publisher")
       {
        this.Id= params['PublisherID']as number;
        this._bookSharevice.getBookByPublisher(this.Id).subscribe(data=>this.arrBook = data["data"] as Book[]);

       }
       
       
    });
  
  }
  public onView(event:any)
  {
    
    this._urlRouter.navigate(['/book-detail'], {queryParams: {Id:event.target.value}});
  }
  

}
