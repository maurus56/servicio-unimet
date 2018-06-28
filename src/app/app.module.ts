import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './routes/app.routes';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActualProjectsComponent } from './actual-projects/actual-projects.component';
import { PastProjectsComponent } from './past-projects/past-projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ImageModalComponent } from './image-modal/image-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActualProjectsComponent,
    PastProjectsComponent,
    ContactUsComponent,
    WhoWeAreComponent,
    ImageModalComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
