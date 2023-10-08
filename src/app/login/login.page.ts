import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

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
  ngOnInit() {

  }

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

      try {
        const response: any = await firstValueFrom(
          this.http.post(
            'https://74zy0ksiv3.execute-api.us-east-1.amazonaws.com/Prod/registro/login',
            f,
            { observe: 'response' }
          )
        );

        if (response.status === 401) {
          const alert = await this.alertController.create({
            header: 'Error de autenticación',
            message: 'Credenciales incorrectas.',
            buttons: ['Aceptar'],
          });
          await alert.present();
        } else if (response.status === 200 && response.body === 'Autenticación exitosa') {
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
        console.error('Error al ingresar:', error);
      }
    } catch (error) {
      console.error('Error al ingresar:', error);
    }
  }

}
