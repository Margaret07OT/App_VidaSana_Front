
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-caminata',
  templateUrl: './caminata.page.html',
  styleUrls: ['./caminata.page.scss'],
})
export class CaminataPage implements OnInit, OnDestroy {
  stepCount: number = 0;
  private isListening: boolean = false;
  constructor() { }

  ngOnInit() {
    if ('DeviceMotionEvent' in window) {
      window.addEventListener('devicemotion', this.handleDeviceMotion.bind(this));
      this.isListening = true;
    } else {
      console.error('Device Motion not supported on this device.');
    }
  }
  ngOnDestroy() {
    if (this.isListening) {
      window.removeEventListener('devicemotion', this.handleDeviceMotion.bind(this));
    }
  }
  handleDeviceMotion(event: DeviceMotionEvent) {
    if (event.accelerationIncludingGravity) {
      const z = event.accelerationIncludingGravity.z;
      if (z !== null && !isNaN(z) && z > 9.81) {
        // Aumentar el contador de pasos cuando se detecta un paso
        this.stepCount++;
      }
    }
  }

}
