import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-progeso',
  templateUrl: './progeso.page.html',
  styleUrls: ['./progeso.page.scss'],
})
export class ProgesoPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  redirectToCategoriaPage() {
    // Navega a la página "ProgressPage" dentro del tab "tabs/tab2"
    this.router.navigate(['./../tabs/categoria']);
  }
}
