import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { AnglibModule } from '../anglib/anglib.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnglibModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(
    private geolocation: GeolocationService
  ) { }

  ngOnInit() {
    // this.geolocation.getCurrentLocation();

    // this.geolocation.currentLocation.subscribe((res) => {
    //   console.log(res);
    //   this.geolocation.getAddress(res.coord.lat, res.coord.lng)

    //   this.geolocation.reverseGeocoder(res);

    // })

  }
}
