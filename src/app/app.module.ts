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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// import { NgxHideOnScrollModule} from
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrolingDirective } from './scroling.directive';
import { AboutComponent } from './about/about.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component'
import {MatDialogModule} from '@angular/material/dialog';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WhyUsComponent } from './why-us/why-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobComponent,
    ScrolingDirective,
    AboutComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    WhyUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule,
    BrowserAnimationsModule, TeximateModule, HttpClientModule,
     FlexLayoutModule, CarouselModule,MatDialogModule,
      ReactiveFormsModule, FormsModule, MatInputModule,NgxHideOnScrollModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
