import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-caminata',
  templateUrl: './caminata.page.html',
  styleUrls: ['./caminata.page.scss'],
})
export class CaminataPage implements OnInit, OnDestroy {
  stepCount: number = 0;
  private isListening: boolean = false;
  private deviceMotionHandler: (event: DeviceMotionEvent) => void;

  constructor() {

    this.deviceMotionHandler = (event: DeviceMotionEvent) => {};
  }

  ngOnInit() {
    this.deviceMotionHandler = this.handleDeviceMotion.bind(this);
  }

  ngOnDestroy() {
    this.stopListening();
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
    if (event.accelerationIncludingGravity) {
      const z = event.accelerationIncludingGravity.z;
      if (z !== null && !isNaN(z) && z > 9.81) {
        this.stepCount++;
      }
    }
  }

  resetStepCount() {
    this.stepCount = 0;
  }
}
