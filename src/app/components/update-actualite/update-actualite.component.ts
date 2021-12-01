import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import swal from 'sweetalert2';
import { Actualite } from 'src/app/interfaces/actualite';
import { ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-update-actualite',
  templateUrl: './update-actualite.component.html',
  styleUrls: ['./update-actualite.component.css']
})
export class UpdateActualiteComponent implements OnInit {
  actualite: Actualite;
  id: number;
  position = "bottom-right";
  title: string;
  msg: string;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  selectedFiles: FileList;
  files: any = [];
  getimage: any;
  image_url = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'
  image_url1: string
  photourl: string
  createdDate = new Date(Date.now());

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DataService: DataService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.actualite = new Actualite();

    this.id = this.route.snapshot.params["id"];
    this.DataService.getActualite(this.id).subscribe(
      (data) => {
        console.log(data);
        this.actualite = data;
      },
      (error) => console.log(error)
    );
    this.actualite.createdDate = this.createdDate;

  }


  onSubmit() {
    this.actualite.createdDate = this.createdDate;

    this.DataService.updateActualite(this.actualite).subscribe(
      (data) => {
        console.log(data);
        this.actualite = new Actualite();
        this.addToast({
          title: "Success",
          msg: "Annonces a été modifié avec succès",
          timeout: 2000,
          theme: "default",
          position: "bottom-right",
          type: "success",
        });

        this.router.navigate(["list-actualite"]);
      },
      (error) => console.log(error)
    );
  }



  public getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }


  uploadimg1() {
    const file = this.selectedFiles.item(0);
    this.uploadFileimg1(file);
  }
  selectFileimg1(event) {
    this.selectedFiles = event.target.files;
    this.uploadimg1();
  }

  uploadFileimg1(file) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
      secretAccessKey: "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",
      region: "eu-west-3",
    });
    const params = {
      Bucket: "tunisie-immob",
      Key: this.getRandomString(5) + file.name,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    };
    this.getimage = bucket.upload(params, async function (err, data) {
      console.log(data)
      return data.location
    });
    this.image_url1 = this.getimage.singlePart.params.Key
    this.photourl = this.image_url.concat(this.image_url1);
    console.log(this.photourl)
    this.actualite.image = this.photourl
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
