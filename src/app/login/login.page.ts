import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router) {
    this.formularioLogin = this.fb.group({
     'correo' : new FormControl("", Validators.required),
     'contrasena': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    try {
      const f = this.formularioLogin.value;


      const response: string | undefined = await this.http.post('https://74zy0ksiv3.execute-api.us-east-1.amazonaws.com/Prod/registro/login', f, { responseType: 'text' }).toPromise();

      if (response === undefined) {

        console.error('La respuesta de la API es indefinida.');
        return;
      }


      if (response === 'Autenticación exitosa') {

       this.router.navigate(['/principal']);
        console.log('Ingresado');
      } else {
        const alert = await this.alertController.create({
          header: 'Error de autenticación',
          message: 'Credenciales incorrectas.',
          buttons: ['Aceptar']
        });

        await alert.present();
      }
    } catch (error) {
      console.error('Error al ingresar:', error);
    }
  }
}
