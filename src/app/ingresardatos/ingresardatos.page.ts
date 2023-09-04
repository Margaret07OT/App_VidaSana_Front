import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ingresardatos',
  templateUrl: './ingresardatos.page.html',
  styleUrls: ['./ingresardatos.page.scss'],
})
export class IngresardatosPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'fecnac' : new FormControl("", Validators.required),
      'sexo': new FormControl("", Validators.required),
      'peso' : new FormControl("", Validators.required),
      'altura': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      fecnac: f.fecnac,
      sexo: f.sexo,
      peso: f.peso,
      altura: f.alt
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
}


