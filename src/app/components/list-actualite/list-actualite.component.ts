import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { Actualite } from "src/app/interfaces/actualite";

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrls: ['./list-actualite.component.css']
})
export class ListActualiteComponent implements OnInit {

  actualite: Observable<Actualite[]>;
  p: number = 1;
  deleteactualite = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.actualite = this.DataService.getActualiteList();
  }




  actualiteDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cette actualité de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('Actualité supprimé !', '', 'success')
        this.actualite = this.DataService.getActualiteList();

        this.DataService.deleteActualite(id)
          .subscribe(
            data => {
              console.log(data);
              this.deleteactualite = true;
              this.ngOnInit();
            },
            error => console.log(error));
      }
    })
  }



  actualiteUpdate(id: number) {
    this.router.navigate(['update-actualite', id]);
  }



}
