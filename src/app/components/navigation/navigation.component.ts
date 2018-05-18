import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../model/category';
import { AuthorService } from '../../service/author.service';
import { PublisherService } from '../../service/publisher.service';
import { Author } from '../../model/author';
import { Publisher } from '../../model/publisher';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public arrCategory:Category[]=[];
  public arrAuthor:Author[]=[];
  public arrPublisher:Publisher[]=[];

  constructor(private _categoryService:CategoryService,
              private _authorService: AuthorService,
              private _publisherService : PublisherService
  ) { 

  }

  ngOnInit() {
    this.loadCategory();
    this.loadAuthor();
    this.loadPublisher();

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
}
