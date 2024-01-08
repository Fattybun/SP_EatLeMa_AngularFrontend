import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnglibModule } from '../anglib/anglib.module';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-geofencing',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './geofencing.component.html',
  styleUrls: ['./geofencing.component.scss']
})

export class GeofencingComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
