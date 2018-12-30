import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModuleComponent } from './common-module/login-module/login-module.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
