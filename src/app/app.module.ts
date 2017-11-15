import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { WorldmapComponent } from './worldmap.component';
import { BlogComponent } from './blog.component';
import { HomeComponent} from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogdetailComponent } from './blogdetail.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    WorldmapComponent,
    BlogComponent,
    HomeComponent,
    BlogdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

