import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { DataService } from "src/app/services/data.service";
import { Devis } from 'src/app/interfaces/devis';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.css']
})
export class ListDevisComponent implements OnInit {
  devis: Observable<Devis[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.devis = this.DataService.getDevisList();

  }


  devisDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cet devis de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('demande supprimé !', '', 'success')
        this.devis = this.DataService.getDevisList();

        this.DataService.deleteDevis(id)
          .subscribe(
            data => {
              console.log(data);
              this.deleteMessage = true;
              this.ngOnInit();
            },
            error => console.log(error));
      }
    })
  }

}
