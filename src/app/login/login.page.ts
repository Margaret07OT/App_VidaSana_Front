import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioLogin = this.fb.group({
     'correo' : new FormControl("", Validators.required),
     'contraseña': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    try {
      const f = this.formularioLogin.value;
      const usuarioStr = localStorage.getItem('usuario');

      if (!usuarioStr) {
        // El usuario no está almacenado en el almacenamiento local
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se encontró el usuario en el almacenamiento local.',
          buttons: ['Aceptar']
        });
        await alert.present();
        return; // Salir de la función
      }

      const usuario = JSON.parse(usuarioStr);

      if (usuario.correo === f.correo && usuario.contraseña === f.contraseña) {
        console.log('Ingresado');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });

        await alert.present();
      }
    } catch (error) {
      console.error('Error al ingresar:', error);
    }
  }
}
