import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DrawerComponent } from './anglib/drawer/drawer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    DrawerComponent,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // to prevent Error: NG05105
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
