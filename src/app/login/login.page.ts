import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  async ingresar() {
    try {
      if (this.formularioLogin.invalid) {
        const alert = await this.alertController.create({
          header: 'Campos inválidos',
          message: 'Por favor, complete los campos correctamente.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return;
      }

      const f = this.formularioLogin.value;

      const response = await this.http
        .post(
          'https://74zy0ksiv3.execute-api.us-east-1.amazonaws.com/Prod/registro/login',
          f,
          { responseType: 'text' }
        )
        .toPromise();

      if (response === 'Credenciales inválidas') {
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Credenciales incorrectas.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      } else if (response === 'Autenticación exitosa') {
        this.router.navigate(['/principal']);
        console.log('Ingresado');
      } else {
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Otro error de autenticación',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } catch (error) {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Credenciales incorrectas.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      } else {
        console.error('Error al ingresar:', error);
        const alert = await this.alertController.create({
          header: 'Error al ingresar',
          message: 'Ha ocurrido un error al intentar ingresar.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    }
  }
}
