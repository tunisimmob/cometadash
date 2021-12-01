import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import { ToastData, ToastOptions, ToastyService } from "ng2-toasty";
import { Presentation } from "src/app/interfaces/presentation";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-update-presentation',
  templateUrl: './update-presentation.component.html',
  styleUrls: ['./update-presentation.component.css']
})
export class UpdatePresentationComponent implements OnInit {

  id: number;
  presentation: Presentation;
  testimage: string;
  position = "bottom-right";
  title: string;
  msg: string;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  closeOther = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DataService: DataService,
    private toastyService: ToastyService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.presentation = new Presentation();

    this.id = this.route.snapshot.params["id"];
    this.DataService.getPresentation(this.id).subscribe(
      (data) => {
        console.log(data);
        this.presentation = data;
      },
      (error) => console.log(error)
    );
  }




  onSubmit() {
    this.DataService.updatePresentation(this.presentation).subscribe(
      (data) => {
        console.log(data);
        this.presentation = new Presentation();
        this.router.navigate(["list-presentation"]);
      },
      (error) => console.log(error)
    );
  }



  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
    };

    switch (options.type) {
      case "default":
        this.toastyService.default(toastOptions);
        break;
      case "info":
        this.toastyService.info(toastOptions);
        break;
      case "success":
        this.toastyService.success(toastOptions);
        break;
      case "wait":
        this.toastyService.wait(toastOptions);
        break;
      case "error":
        this.toastyService.error(toastOptions);
        break;
      case "warning":
        this.toastyService.warning(toastOptions);
        break;
    }
  }
}
