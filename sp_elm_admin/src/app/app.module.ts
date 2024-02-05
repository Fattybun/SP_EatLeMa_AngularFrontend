import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from './anglib/drawer/drawer.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { GeofencingComponent } from './geofencing/geofencing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { WheelConfComponent } from './wheel-conf/wheel-conf.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DrawerComponent,
    HistoryComponent,
    ProfileComponent,
    SettingComponent,
    DashboardComponent,
    WheelConfComponent,
    ManageUserComponent,
    GeofencingComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
