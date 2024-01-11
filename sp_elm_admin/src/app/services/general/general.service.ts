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
      }
    });
  }

  redirect(component: string) {
    this.router.navigate([component])
  }

}
