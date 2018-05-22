import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from '../../book-detail/book-detail/book-detail.component';
import { SelectionComponent } from '../../selection/selection.component';
import { LayoutComponent } from './layout.component';
import { IndexComponent } from '../../index/index/index.component';
import { ListBookComponent } from '../../list-book/list-book.component';





const routes: Routes =[
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
 
  {
    
    path:'',
    component:LayoutComponent
 },
 {
    
  path:'index',
  component:IndexComponent
},
  
  {
     path:'book-detail',
     component:BookDetailComponent
  },
  {
    path:'list-book',
    component:ListBookComponent
 },
   
 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class LayoutRoutingModule { }