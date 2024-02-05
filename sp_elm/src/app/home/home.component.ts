import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { AnglibModule } from '../anglib/anglib.module';
import { GeneralService } from '../services/general/general.service';
import { DrawerComponent } from '../anglib/drawer/drawer.component';

declare var google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnglibModule, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  nearestRestaurants: {
    place_name: string,
    formatted_address: string
  }[] = [];

  formatted_address: any;

  constructor(
    private zone: NgZone,
    public general: GeneralService,
    private geolocation: GeolocationService
  ) { }

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((response) => {
      console.log('pos', response);

      let value = response.lat + "," + response.lng;

      this.geocodeLatLng(value);

    })

  }

  spinWheel() {
    console.log('click!');

    let wheel = document.querySelector('.wheel') as HTMLElement;
    let value = Math.ceil(Math.random() * 3600)

    wheel.style.transform = 'rotate(' + value +'deg)';
    value += Math.ceil(Math.random() * 3600)
  }

  geocodeLatLng(coord: any) {
    const geocoder = new google.maps.Geocoder();
    const places = new google.maps.places.PlacesService(document.createElement('div'));
    const input = coord;

    const latlngStr = input.split(",", 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1])
    };

    geocoder.geocode({ location: latlng }, (results: any, status: any) => {
      if (status !== 'OK' || !results || results.length === 0) {
        console.error('Geocoder failed with status:', status);
        return;
      }

      const request = {
        location: latlng,
        radius: 2000,
        type: 'restaurant',
      };

      places.nearbySearch(request, (nearbyResults: any, nearbyStatus: any) => {
        if (nearbyStatus !== google.maps.places.PlacesServiceStatus.OK) {
          console.error('NearbySearch failed with status:', nearbyStatus);
          return;
        }

        const first10Results = nearbyResults.slice(0, 10);

        const promises = first10Results.map((place: any) => {
          const detailsRequest = { placeId: place.place_id };

          return new Promise<string>((resolve, reject) => {
            places.getDetails(detailsRequest, (result: any) => {
              if (result && result.formatted_address) {
                resolve(result.formatted_address);
              } else {
                reject('No formatted address found');
              }
            });
          });
        });

        Promise.all(promises)
          .then((formattedAddresses: string[]) => {

            this.zone.run(() => {
              this.nearestRestaurants = first10Results.map((place: any, index: number) => ({
                place_name: place.name,
                formatted_address: formattedAddresses[index]
              }));
            })


            console.log('nearest', this.nearestRestaurants)

            console.log('length', this.nearestRestaurants.length);
          })
          .catch((error) => {
            console.error('Error fetching details:', error);
          });
      });
    });
  }


}
