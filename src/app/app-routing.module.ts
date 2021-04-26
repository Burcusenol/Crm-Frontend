import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadingComponent } from './components/heading/heading.component';
import { IdentityComponent } from './components/identity/identity.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path:"headings",component:HeadingComponent},
  {path:"personupdates",component:UpdateComponent},
  {path:"identities/add",component:IdentityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
