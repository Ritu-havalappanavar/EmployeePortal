import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ViewRegistrationsComponent } from './view-registrations/view-registrations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ViewRegistrationsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
