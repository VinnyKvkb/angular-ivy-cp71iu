import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  // For Maps
  latitude = 15.9129;
  longitude = 79.7400;

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    console.log('click', event);

  }

  constructor() { }

  ngOnInit() {
  }
  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);

  }

}
