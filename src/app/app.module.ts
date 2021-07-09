import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HowToComponent } from './how-to/how-to.component';
import { IndoorDetailsComponent } from './indoor-details/indoor-details.component';
import { OutdoorDetailsComponent } from './outdoor-details/outdoor-details.component';
import { WhileWorkingDetailsComponent } from './while-working-details/while-working-details.component';
import { ProgramComponent } from './program/program.component';

import { NgxPayPalModule } from 'ngx-paypal';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';

import { MyopiaModule } from './myopia/myopia.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HowToComponent,
    IndoorDetailsComponent,
    OutdoorDetailsComponent,
    WhileWorkingDetailsComponent,
    ProgramComponent,
    ContactComponent,
    TrainingComponent
  ],
  imports: [
    NgxPayPalModule,

    MatFormFieldModule,

    FormsModule,//added for ngModel
    ReactiveFormsModule,//added for form group
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatDatepickerModule,
    MatNativeDateModule,

    //FOR Lazy loading
    MyopiaModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
