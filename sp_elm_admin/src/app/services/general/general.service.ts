import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public currentRoute: any = '';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.router.routerState.snapshot.url.substring(1);
        console.log(this.currentRoute)
        // Update your service's currentRoute here
      }
    });
  }

  redirect(component: string) {
    // this.currentRoute = component;
    this.router.navigate([component])
  }

}
