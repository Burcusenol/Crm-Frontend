import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactupdateComponent } from './components/contactupdate/contactupdate.component';
import { EducationComponent } from './components/education/education.component';
import { HeadingComponent } from './components/heading/heading.component';
import { HomeComponent } from './components/home/home.component';
import { IdentityComponent } from './components/identity/identity.component';
import { JobComponent } from './components/job/job.component';
import { JobtypeComponent } from './components/jobtype/jobtype.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { RelationComponent } from './components/relation/relation.component';
import { TccardComponent } from './components/tccard/tccard.component';
import { UpdateComponent } from './components/update/update.component';



const routes: Routes = [
  {path:"",pathMatch:"full", component:ContactComponent},
  {path:"headings",component:HeadingComponent},
  {path:"personupdates",component:UpdateComponent},
  {path:"contact",component:ContactComponent},
  {path:"identities/add",component:IdentityComponent},
  {path:"addresses/add",component:AddressComponent},
  {path:"contacts/add",component:ContactComponent},
  {path:"homes/add",component:HomeComponent},
  {path:"contactupdate/update",component:ContactupdateComponent},
  {path:"contactupdate/getall",component:ContactupdateComponent},
  {path:"educations/add",component:EducationComponent},
  {path:"jobtype/add",component:JobtypeComponent},
  {path:"references",component:ReferenceComponent},
  {path:"tccards/add",component:TccardComponent},
  {path:"updates/add",component:UpdateComponent},
  {path:"relations",component:RelationComponent},
  {path:"jobs/add",component:JobComponent},
  {path:"headings/add",component:HeadingComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
