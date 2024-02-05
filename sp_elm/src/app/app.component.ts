import { Component, ViewEncapsulation } from '@angular/core';
import { GeneralService } from './services/general/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'sp_elm';

  constructor(
    public general: GeneralService
  ) {}
}
