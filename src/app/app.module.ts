import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { SlickCarouselModule } from 'ngx-slick-carousel'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MobComponent } from './mob/mob.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    BrowserAnimationsModule,TeximateModule,HttpClientModule,FlexLayoutModule,CarouselModule,ReactiveFormsModule,FormsModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
