import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail/book-detail.component';
import { LayoutComponent } from './components/layout/layout-template/layout.component';
import { LayoutModule } from './components/layout/layout-template/layout.module';

const routes: Routes =[
    
     {
      path: '',
      component: LayoutComponent,
      children: [
          {
        path: '',
        //  loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        loadChildren:()=>LayoutModule
    }]}
      // { path: 'dashboard',      component: DashboardComponent },
      // { path: 'user-profile',   component: UserProfileComponent },
      // { path: 'table-list',     component: TableListComponent },
      // { path: 'typography',     component: TypographyComponent },
      // { path: 'icons',          component: IconsComponent },
      // { path: 'maps',           component: MapsComponent },
      // { path: 'notifications',  component: NotificationsComponent },
      // { path: 'upgrade',        component: UpgradeComponent },
      // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
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
export class AppRoutingModule { }