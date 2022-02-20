import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;
  private position: any
  private marker: any;
  private $send: any;
  constructor() {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loadMap()
  }

  find_location() {
    this.map.on('click', (e: any) => {
      const position = {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng
      }
      this.position = position
      const icon = L.icon({
        iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
        shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
        popupAnchor: [13, 0],
      });

      this.map.removeLayer(this.marker)
      this.marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup(
        ` latitude : ${this.position.latitude} <br>
         longitude: ${this.position.longitude}
      `);
      this.marker.addTo(this.map);
    });


  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,

            });
            observer.complete();
          }

        });

      } else {
        observer.error();
      }
    });
  }
  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);


    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 13);
        const icon = L.icon({
          iconUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-icon.png',
          shadowUrl: 'https://res.cloudinary.com/rodrigokamada/image/upload/v1637581626/Blog/angular-leaflet/marker-shadow.png',
          popupAnchor: [13, 0],
        });

        this.marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup(
          ` latitude : ${position.latitude} <br>
              longitude: ${position.longitude} <br>
           `
        );
        this.marker.addTo(this.map);
      });
  }

  send() {
    console.log(this.position)
  }
}
