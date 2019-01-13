import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ResultComponent } from './result/result.component';
import { ChartComponent } from './chart/chart.component';
import { DesktopComponent } from './desktop/desktop.component';

@NgModule({
  declarations: [
    ResultComponent,
    ChartComponent,
    DesktopComponent
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