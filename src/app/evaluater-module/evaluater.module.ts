import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RatingComponent
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
    RatingComponent
  ]
})
export class EvaluaterModule { }