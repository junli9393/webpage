import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';
import {AppComponent} from './app.component';
import {WorldmapComponent} from './worldmap.component';
import {BlogComponent} from './blog.component';
import {HomeComponent} from './home.component';
import {BlogdetailComponent} from './blogdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'worldmap', component: WorldmapComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogdetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

