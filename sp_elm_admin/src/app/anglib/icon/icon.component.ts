import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib.module';

export interface icon {
  customCSS: {}
}

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent {
  @Input() icon_config: icon = {
    customCSS: {}
  }

  ngOnInit() {

  }
}
