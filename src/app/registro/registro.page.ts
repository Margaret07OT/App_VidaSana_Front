import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    public alertController: AlertController,
    private http: HttpClient,
    private router: Router,
  ) {
    this.formularioRegistro = this.fb.group({
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      contrasenaHash: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      documento: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      altura: ['', Validators.required],
      peso: ['', Validators.required],

    });
  }

  async guardar() {
  const formData = this.formularioRegistro.value;

  if (this.formularioRegistro.invalid) {
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Tienes que llenar todos los datos',
      buttons: ['Aceptar'],
    });

    await alert.present();
    return;
  }

  // Enviar datos a la API
  const url = 'https://74zy0ksiv3.execute-api.us-east-1.amazonaws.com/Prod/registro/registrar'; // Corregir la URL
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  try {
    const responseText = await this.http.post(url, formData, { responseType: 'text', headers }).toPromise();

    if (responseText === 'Registro guardado exitosamente.') {
      // La API respondió con éxito
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se regristro correctamente',
        buttons: ['Aceptar'],
      });

      await alert.present();


      this.router.navigate(['/principal']);
    } else {

      console.error('Respuesta de la API desconocida:', responseText);
    }
  } catch (error) {
    console.error('Error al enviar los datos a la API:', error);

  }
}

}

