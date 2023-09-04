import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'prinom' : new FormControl("", Validators.required),
      'segnon': new FormControl("", Validators.required),
      'apepater' : new FormControl("", Validators.required),
      'apemater': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required),
      'repetircontra': new FormControl("", Validators.required),
      'documento' : new FormControl("", Validators.required),
      'numdoc': new FormControl("", Validators.required),
      'tipoco': new FormControl("", Validators.required),
      'correo' : new FormControl("", Validators.required),

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
      prinom: f.prinom,
      segnon: f.segnon,
      apepater: f.apepater,
      apemater: f.apemater,
      contraseña: f.contraseña,
      repetircontra: f.repetircontra,
      documento: f.documento,
      numdoc: f.numdoc,
      tipoco: f.tipoco,
      correo: f.correo
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
