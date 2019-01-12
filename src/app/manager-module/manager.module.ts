import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  exports:[
    ResultComponent
  ]
})
export class ManagerModule { }