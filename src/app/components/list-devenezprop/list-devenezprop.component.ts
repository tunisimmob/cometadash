import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2';
import { DevenezFranchiser } from "src/app/interfaces/devenezfranchiser";

@Component({
  selector: 'app-list-devenezprop',
  templateUrl: './list-devenezprop.component.html',
  styleUrls: ['./list-devenezprop.component.css']
})
export class ListDevenezpropComponent implements OnInit {
  devenezprop: Observable<DevenezFranchiser[]>;
  p: number = 1;
  deleteMessage = false;

  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
    this.devenezprop = this.DataService.getDevenezFranchiseList();
  }






  devenezpropDelete(id: number) {
    swal.fire({
      title: 'Voulez vous vraiment supprimer cette demande de façon permanente ?',
      showDenyButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        swal.fire('demande supprimé !', '', 'success')
        this.devenezprop = this.DataService.getDevenezFranchiseList();

        this.DataService.deleteDevenezFranchise(id)
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

