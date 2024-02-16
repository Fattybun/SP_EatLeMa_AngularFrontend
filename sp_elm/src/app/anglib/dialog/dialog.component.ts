import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  @Input() dialog_config: {
    title?: string,
    content?: string,
    backdrop: boolean,
    template: number | string,
    customStyle?: any,
  }[] = [];
}
