import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib/anglib.module';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-wheel-conf',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './wheel-conf.component.html',
  styleUrls: ['./wheel-conf.component.scss']
})

export class WheelConfComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
