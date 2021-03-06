import { Injectable } from '@angular/core';
import { ShareService } from './shareservice';
import { Observable } from 'rxjs/Observable';
import { Config } from './config';
import { Book } from '../model/book';

@Injectable()
export class BookService 
{
  public URI:string ="book";
  
  /**
   *
   */
  constructor(private _shareService:ShareService) {
    
  }
  public getBook(searchname:string ,skip:number, pagesize:number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/"+searchname+"/"+skip+"/"+pagesize);
  }
  public getNewBook():Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/getnewbook");
  }
  public getBookbyID(Id :number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/getbookbyid/"+Id);
  }
  public getBookByCategory(Id :number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/getbookbycategory/"+Id);
  }
  public getBookByAuthor(Id :number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/getbookbyauthor/"+Id);
  }
  public getBookByPublisher(Id :number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/getbookbypublisher/"+Id);
  }
  public getBookByName(searchname:string, skip:number, pagesize:number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/"+searchname+"/"+skip+"/"+pagesize);
  }
  public getTotalRecord(skip:number, pagesize:number):Observable<any[]>
  {
   
      return this._shareService.httpGet(Config.URL+this.URI+"/gettotalrecord");
  }
  public SaveBook(entity:Book,isNew:boolean):Observable<any>
  {
    if(isNew)
    {
      return  this._shareService.httpPost<Book>(Config.URL+ this.URI,entity);
     

    }
    else
    {
      return  this._shareService.httpPut<Book>(Config.URL+ this.URI,entity);
    }
      
  }
  
  deleteBook<Book>(objectCategory:Book): Observable < any > {  
   return  this._shareService.httpDelete(Config.URL+ this.URI,objectCategory);
  }

}
