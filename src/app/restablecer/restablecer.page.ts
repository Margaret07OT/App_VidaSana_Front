import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: 'restablecer.page.html',
  styleUrls: ['restablecer.page.scss']
})
export class RestablecerPage {
  formulariorestablecer: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, private alertController: AlertController) {
    this.formulariorestablecer = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  async restablecer() {
    if (this.formulariorestablecer) {
      const correoControl: AbstractControl | null = this.formulariorestablecer.get('correo');

      if (correoControl && correoControl.valid) {
        const correo = correoControl.value;
        this.router.navigate(['/cambiocon', correo]);
      } else {
        const alert = await this.alertController.create({
          header: 'Correo inválido',
          message: 'Por favor, ingrese un correo válido.',
          buttons: ['OK']
        });
        await alert.present();
        if (correoControl) {
          correoControl.setErrors({ 'correoInvalido': true });
        }
      }
    }
  }

}
