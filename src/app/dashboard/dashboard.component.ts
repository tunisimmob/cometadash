import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
import { DataService } from "src/app/services/data.service";
// import * as Chart from 'chart.js'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  produit: number;
  video: number;
  message: number;
  actualite: number;
  devis: number;
  devenirfranch: number;



  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.countVideo().subscribe(data => this.video = data);
    this.DataService.countMessage().subscribe(data => this.message = data);
    this.DataService.countProduit().subscribe(data => this.produit = data);
    this.DataService.countActualite().subscribe(data => this.actualite = data);
    this.DataService.countDevis().subscribe(data => this.devis = data);
    this.DataService.countDevfranch().subscribe(data => this.devenirfranch = data);
  }


}
