import { NgModule } from '@angular/core';
import { LoginModuleComponent } from './login-module/login-module.component';
import { HeaderModuleComponent } from './header-module/header-module.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginModuleComponent,
    HeaderModuleComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [],
  exports:[
    LoginModuleComponent,
    HeaderModuleComponent
  ]
})
export class CommonModule { }