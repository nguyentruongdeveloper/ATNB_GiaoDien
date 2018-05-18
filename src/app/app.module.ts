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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    NewbookComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  
  ],
  providers: [
    CategoryService,
    AuthorService,
    PublisherService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
