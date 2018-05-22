import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { NewbookComponent } from './components/newbook/newbook.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CategoryService } from './service/category.service';
import { ShareService } from './service/shareservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthorService } from './service/author.service';
import { PublisherService } from './service/publisher.service';
import { BookService } from './service/book.service';
import { BookDetailComponent } from './components/book-detail/book-detail/book-detail.component';
import { AppRoutingModule } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './components/layout/layout-template/layout.module';
import { LayoutComponent } from './components/layout/layout-template/layout.component';
import { IndexComponent } from './components/index/index/index.component';
import { ListBookComponent } from './components/list-book/list-book.component';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    IndexComponent,
    HomeComponent,
    SelectionComponent,
    BookDetailComponent,
    ListBookComponent
   



  ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
   
    RouterModule,
    AppRoutingModule,



  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
