
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CreateProfileComponent } from './createprofile/createprofile.component';
import { CreateCompanyComponent } from './createcompany/createcompany.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'profile',  component: CreateProfileComponent },
  { path: 'company',  component: CreateCompanyComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}