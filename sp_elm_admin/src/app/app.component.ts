import { AfterContentChecked, AfterRenderRef, AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GeneralService } from './services/general/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterContentChecked {
  title = 'sp_elm_admin';
  pages!: string;

  constructor(
    public general: GeneralService
  ) {}

  ngAfterContentChecked() {
    switch(this.general.currentRoute) {
      case 'dashboard':
        this.pages = 'Dashboard';
        break;
      case 'user':
        this.pages = 'Manage User';
        break;
      case 'history':
        this.pages = 'Manage History';
        break;
      case 'wheel_conf':
        this.pages = 'Wheel Configuration';
        break;
      case 'geofence':
        this.pages = 'Geofencing Configuration';
        break;
      case 'setting':
        this.pages = 'General Setting';
        break;
      case 'profile':
        this.pages = 'Profile';
        break;
    }
  }
}
