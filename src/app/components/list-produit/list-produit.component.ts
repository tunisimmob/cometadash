import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Produit } from "src/app/interfaces/produit";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  produit: Observable<Produit[]>;
  p: number = 1;
  deleteProduit = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.produit = this.DataService.getProduitList();
  }




  produitDelete(id: number) {

    swal.fire({
      title: 'Voulez vous vraiment supprimer cet produit de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Produit supprimé !', '', 'success')
        this.produit = this.DataService.getProduitList();

        this.DataService.deleteProduit(id)
          .subscribe(
            data => {
              console.log(data);
              this.deleteProduit = true;
              this.ngOnInit();
            },
            error => console.log(error));
      }
    })

  }



  produitUpdate(id: number) {
    this.router.navigate(['update-produit', id]);
  }



}
