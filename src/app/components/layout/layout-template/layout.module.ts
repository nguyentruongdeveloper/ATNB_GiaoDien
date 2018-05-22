import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionComponent } from '../../selection/selection.component';
import { LayoutRoutingModule } from './layout.routing';



import { CategoryService } from '../../../service/category.service';
import { AuthorService } from '../../../service/author.service';
import { PublisherService } from '../../../service/publisher.service';
import { BookService } from '../../../service/book.service';
import { ShareService } from '../../../service/shareservice';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
  ],
  declarations: [
 
   
   
    
  ],
  providers: [
    CategoryService,
    AuthorService,
    PublisherService,
    BookService,
    ShareService
  ],
})
export class LayoutModule { }
