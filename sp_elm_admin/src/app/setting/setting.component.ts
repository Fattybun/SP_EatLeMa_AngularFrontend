import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib/anglib.module';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
