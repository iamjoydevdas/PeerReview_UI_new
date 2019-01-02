import { NgModule } from '@angular/core';
import { LoginModuleComponent } from './login-module/login-module.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginModuleComponent,
    HeaderModuleComponent
  ],
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  exports:[
    LoginModuleComponent,
    HeaderModuleComponent
  ]
})
export class CommonModule { }