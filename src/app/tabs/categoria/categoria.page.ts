import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  redirectToPausaPage() {

    this.router.navigate(['./../tabs/subcatepausa']);
  }
  redirectToEjercicioPage() {

    this.router.navigate(['./../tabs/ejercicios']);
  }
  redirectToCaminataPage() {

    this.router.navigate(['./../tabs/caminata']);
  }

}
