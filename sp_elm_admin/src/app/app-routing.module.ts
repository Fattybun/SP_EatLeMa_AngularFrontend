import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { GeofencingComponent } from './geofencing/geofencing.component';
import { WheelConfComponent } from './wheel-conf/wheel-conf.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'user',
    component: ManageUserComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'geofence',
    component: GeofencingComponent
  },
  {
    path: 'wheel_conf',
    component: WheelConfComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
