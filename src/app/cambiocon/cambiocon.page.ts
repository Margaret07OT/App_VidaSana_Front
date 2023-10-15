import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiocon',
  templateUrl: './cambiocon.page.html',
  styleUrls: ['./cambiocon.page.scss'],
})
export class CambioconPage implements OnInit {
  formulariocambio: FormGroup;
  correo: string = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      const correoParam = params.get('correo');
      if (correoParam !== null) {
        this.correo = correoParam;
        console.log('Correo recibido:', this.correo);
      }
    });

    this.formulariocambio = this.fb.group({
      contrasenaHash: ['', Validators.required],
      confirmarContrasena: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async cambio() {
    const contrasena = this.formulariocambio.get('contrasenaHash')?.value;
    const confirmarContrasena = this.formulariocambio.get('confirmarContrasena')?.value;

    if (contrasena !== confirmarContrasena) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const data = {
      correo: this.correo,
      contrasena: contrasena,
      confirmarContrasena: confirmarContrasena,
    };

    this.http
    .put('https://74zy0ksiv3.execute-api.us-east-1.amazonaws.com/Prod/registro/cambiocon', data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text',
    })
    .subscribe(
      async (response) => {

        console.log('Éxito', response);

        if (response === 'Contraseñas cambiadas exitosamente') {
          const successAlert = await this.alertController.create({
            header: 'Éxito',
            message: 'Contraseña modificada',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.router.navigate(['/principal']);
                }
              }
            ],
          });
          await successAlert.present();
        } else {
          console.log('Respuesta inesperada:', response);
        }
      },
      (error) => {

        console.error('Error', error);
      }
    );

  }
}
