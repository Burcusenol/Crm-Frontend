import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ToastrModule} from "ngx-toastr";
import { HeadingComponent } from './components/heading/heading.component';
import { NaviComponent } from './components/navi/navi.component';
import { UpdateComponent } from './components/update/update.component';
import { IdentityComponent } from './components/identity/identity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './components/address/address.component';
import {ContactComponent} from './components/contact/contact.component';
import { JobComponent } from './components/job/job.component';
import { TccardComponent } from './components/tccard/tccard.component';
import { ContactupdateComponent } from './components/contactupdate/contactupdate.component';
import { EducationComponent } from './components/education/education.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { RelationComponent } from './components/relation/relation.component';
import { JobtypeComponent } from './components/jobtype/jobtype.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NaviComponent,
    UpdateComponent,
    IdentityComponent,
    AddressComponent,
    ContactComponent,
    JobComponent,
    TccardComponent,
    ContactupdateComponent,
    EducationComponent,
    ReferenceComponent,
    RelationComponent,
    JobtypeComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    NgbModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
