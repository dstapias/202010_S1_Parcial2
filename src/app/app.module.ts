import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieComponent } from './serie/serie.component';

import { SerieModule } from './serie/serie.module';
@NgModule({
   declarations: [
      AppComponent,
      SerieComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
