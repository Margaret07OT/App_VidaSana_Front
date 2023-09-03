import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'prinpom' : new FormControl("", Validators.required),
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

}
