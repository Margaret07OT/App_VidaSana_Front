import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-subcatepausa',
  templateUrl: './subcatepausa.page.html',
  styleUrls: ['./subcatepausa.page.scss'],
})
export class SubcatepausaPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  redirectToElogacionPage() {
    // Navega a la página "ProgressPage" dentro del tab "tabs/tab2"
    this.router.navigate(['./../tabs/elgocacion']);
  }
  redirectToEstiramientoPage(){
    // Navega a la página "ProgressPage" dentro del tab "tabs/tab2"
    this.router.navigate(['./../tabs/estiramiento']);
  }

}
