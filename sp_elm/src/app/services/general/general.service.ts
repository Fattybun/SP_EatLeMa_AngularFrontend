import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private router: Router
  ) { }

  redirect(component: string) {
    this.router.navigate([component])
  }
}
