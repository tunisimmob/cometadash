import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import swal from 'sweetalert2';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  position = "bottom-right";
  title: string;
  msg: string;
  showClose = true;
  timeout = 2000;
  theme = "bootstrap";
  type = "default";
  produit: Produit = new Produit();
  files: any = [];
  getimage: any;
  image_url = 'https://tunisie-immob.s3-eu-west-3.amazonaws.com/'
  image_url1: string
  photourl: string
  isLoading = false;


  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit() {
  }



  async onSubmit() {
    console.log(this.produit.images.length)
    this.DataService.createProduit(this.produit).subscribe(
      (data) => { console.log(data), this.router.navigate(["list-produit"]); },
      (error) => { console.log(error); this.erreurajout("Veuillez réessayer ultérieurement") }
    );
    this.produit = new Produit();

  }


  erreurajout(err: any) {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    })
  }

  public getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }



  public uploadImageExt(event) {
    for (let index = 0; index < event.length; index++) {


      const element = event[index];
      const contentType = event[index].type;
      const bucket = new S3({
        accessKeyId: "AKIAXVWFAUBHFUM7UQ24",
        secretAccessKey: "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",
        region: "eu-west-3",
      });
      const params = {
        Bucket: "tunisie-immob",
        Key: this.getRandomString(5) + event[index].name,
        Body: event[index],
        ACL: "public-read",
        ContentType: contentType,
      };
      this.getimage = bucket.upload(params, function (err, data) {
        return data.location
      });


      this.image_url1 = this.getimage.singlePart.params.Key
      this.photourl = this.image_url.concat(this.image_url1);
      this.produit.images.push(this.photourl)
      this.files.push(element.name)
    }
    console.log(this.produit.images.length)

  }
}





