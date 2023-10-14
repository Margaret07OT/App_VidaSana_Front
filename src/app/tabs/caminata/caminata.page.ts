import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-caminata',
  templateUrl: './caminata.page.html',
  styleUrls: ['./caminata.page.scss'],
})
export class CaminataPage implements OnInit, AfterViewInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef | undefined;
  map: any;
  stepCount: number = 0;
  private isListening: boolean = false;
  private deviceMotionHandler: (event: DeviceMotionEvent) => void;
  private routeCoordinates: any = [];
  private googleMapsInitialized: boolean = false;

  constructor() {
    this.deviceMotionHandler = (event: DeviceMotionEvent) => {};
    this.mapElement = undefined;
  }

  async ngOnInit() {
    this.deviceMotionHandler = this.handleDeviceMotion.bind(this);
  }

  inicioFin() {
    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  startListening() {
    if ('DeviceMotionEvent' in window && !this.isListening) {
      window.addEventListener('devicemotion', this.deviceMotionHandler);
      this.isListening = true;
    } else {
      console.error('Device Motion not supported on this device or already listening.');
    }
  }

  stopListening() {
    if (this.isListening) {
      window.removeEventListener('devicemotion', this.deviceMotionHandler);
      this.isListening = false;
    }
  }

  handleDeviceMotion(event: DeviceMotionEvent) {
    if (this.googleMapsInitialized && event.accelerationIncludingGravity) {
      const z = event.accelerationIncludingGravity.z;
      if (z !== null && !isNaN(z) && z > 9.81) {
        this.stepCount++;

        if (this.stepCount === 1) {
          this.routeCoordinates = [];
        }
        Geolocation.getCurrentPosition().then(coordinates => {
          const location = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
          this.routeCoordinates.push(location);
          this.updateRouteOnMap();
        });
      }
    }
  }

  updateRouteOnMap() {
    if (this.googleMapsInitialized && this.map && this.routeCoordinates.length > 1) {
      const routePath = new google.maps.Polyline({
        path: this.routeCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      routePath.setMap(this.map);
    }
  }

  resetStepCount() {
    this.stepCount = 0;
  }

  async getAndShowLocation() {
    if (this.mapElement) {

      const coordinates = await Geolocation.getCurrentPosition();
      const myLocation = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);


      const mapOptions = {
        zoom: 15,
        center: myLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      const marker = new google.maps.Marker({
        position: myLocation,
        map: this.map,
        title: 'Mi ubicación'
      });
      this.startListening();
    } else {
      console.error('Elemento del mapa no encontrado.');
    }
  }

  ngAfterViewInit() {
    if (this.mapElement) {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD_H5cyWMb3pkmTyx_2Oz-Lm4tYoj5cu4k';
      googleMapsScript.onload = () => {
        this.googleMapsInitialized = true;
        this.getAndShowLocation();
      };
      document.body.appendChild(googleMapsScript);
    }
  }
}
