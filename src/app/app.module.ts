import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from './common-module/common.module';
import { AdminModule } from './admin-module/admin.module';
import { EvaluaterModule } from './evaluater-module/evaluater.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './utils/rest/HttpInterceptor';
import { ErrorHandler } from './utils/rest/ErrorHandler';
import { RestApi } from './utils/services/rest-calls';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AdminModule,
    EvaluaterModule,
    HttpClientModule,
    ToasterModule.forRoot()
  ],
  providers: [
    ErrorHandler,
    RestApi,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
