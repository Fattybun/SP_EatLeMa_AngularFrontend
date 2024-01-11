import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib.module';
import { GeneralService } from 'src/app/services/general/general.service';

export interface SideNavItem {
  icon: string;
  name: string;
  routerLink?: string;
}

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})

export class DrawerComponent {
  @Input() page: any;

  constructor(
    public general: GeneralService
  ) {}

  management: SideNavItem[] = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      routerLink: 'dashboard'
    },
    {
      icon: 'manage_accounts',
      name: 'Manage User',
      routerLink: 'user'
    },
    {
      icon: 'history',
      name: 'History',
      routerLink: 'history'
    },
    {
      icon: 'attractions',
      name: 'Wheel Configuration',
      routerLink: 'wheel_conf'
    },
    {
      icon: 'explore_nearby',
      name: 'Geofencing',
      routerLink: 'geofence'
    },
  ]

  preference: SideNavItem[] = [
    {
      icon: 'settings',
      name: 'Setting',
      routerLink: 'setting'
    },
    {
      icon: 'logout',
      name: 'Logout',
      routerLink: ''
    },
  ]
}
