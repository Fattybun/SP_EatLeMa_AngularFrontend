import { Component, NgZone, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { AnglibModule } from '../anglib/anglib.module';
import { GeneralService } from '../services/general/general.service';
import { DrawerComponent } from '../anglib/drawer/drawer.component';
import { MatDialog } from '@angular/material/dialog';

declare var google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnglibModule, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild('resultDialog') resultDialog = {} as TemplateRef<any>;
  @ViewChildren('wheelItem') wheelItems!: QueryList<HTMLElement>;

  nearestRestaurants: {
    place_name: string,
    formatted_address: string
  }[] = [];

  formatted_address: any;
  wheel_itemIndex: any;

  constructor(
    private zone: NgZone,
    private dialog: MatDialog,
    public general: GeneralService,
    private geolocation: GeolocationService
  ) { }

  ngOnInit() {

    this.geolocation.getCurrentPosition().then((response) => {

      let value = response.lat + "," + response.lng;

      this.geolocation.reverseGeocode(response.lat, response.lng).then((place: any) => {
        this.nearestRestaurants = place;
        console.log(this.nearestRestaurants)
      })

    })

  }

  openDialog() {
    setTimeout(() => {
      this.dialog.open(this.resultDialog, {
        data: this.nearestRestaurants[this.wheel_itemIndex + 1].place_name,
        height: '150px',
        width: '300px',
        panelClass: 'dialog_box',
        exitAnimationDuration: 1000,
        enterAnimationDuration: 1000
      });
    }, 5000)
  }

  spinWheel() {
    let value = ((Math.ceil(Math.random() * 3600) % 360 + 360) % 360);
    let spinButton = document.querySelector('.spinButton') as HTMLElement;
    let items = document.querySelectorAll('.wheel_item') as NodeListOf<HTMLElement>;

    if (value <= 360) {
      value = Math.ceil(value / 36) * 36;
    }

    spinButton.style.transform = 'rotate(' + value + 'deg)';

    this.wheel_itemIndex = Math.floor(value / (360 / items.length)) % items.length;

    value += value;

    this.openDialog();
  }
}
