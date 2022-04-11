import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { CredentialsComponent } from './pages/credentials/credentials.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "credentials", component: CredentialsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
