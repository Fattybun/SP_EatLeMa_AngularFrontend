import { Component, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general/general.service';
import { AnglibModule } from '../anglib.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})

export class DrawerComponent {
  constructor(
    public general: GeneralService
  ) {}

  @Input() drawer_config: {
    logo?: string,
    title: string,
    catalog: string[],
    tooltips: boolean,
    template: number | string,
    customStyle?: any
  }[] = []
}
