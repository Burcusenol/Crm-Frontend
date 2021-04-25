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

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NaviComponent,
    UpdateComponent,
    IdentityComponent
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
