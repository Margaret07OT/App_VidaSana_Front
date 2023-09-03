import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrop2',
  templateUrl: './registrop2.page.html',
  styleUrls: ['./registrop2.page.scss'],
})
export class Registrop2Page implements OnInit {

  formularioRegistrop2: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRegistrop2 = this.fb.group({
      'fechanac': new FormControl("", Validators.required),
      'sexo' : new FormControl("", Validators.required),
      'peso': new FormControl("", Validators.required),
      'altura': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

}
