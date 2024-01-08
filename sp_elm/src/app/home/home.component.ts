import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GeolocationService } from '../services/geolocation/geolocation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatListModule, MatToolbarModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private geolocation: GeolocationService
  ) { }

  ngOnInit() {
    this.geolocation.getCurrentLocation();

    this.geolocation.currentLocation.subscribe((res) => {
      console.log(res);
      this.geolocation.getAddress(res.coord.lat, res.coord.lng)

      this.geolocation.reverseGeocoder(res);

    })

  }
}
