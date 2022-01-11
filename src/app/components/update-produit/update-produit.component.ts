import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as S3 from "aws-sdk/clients/s3";
import swal from 'sweetalert2';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
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
  isLoading = false
  id: number

  constructor(private DataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.produit = new Produit();
    this.id = this.route.snapshot.params["id"];
    this.DataService.getProduit(this.id).subscribe(
      (data) => {
        console.log(data);
        this.produit = data;
      },
      (error) => console.log(error)
    )

  }


  async onSubmit() {

    this.DataService.updateProduit(this.produit).subscribe(
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

  deletephoto(img: any) {
    this.id = this.route.snapshot.params["id"];
    this.DataService.getProduit(this.id).subscribe(
      (data) => {
        console.log(data);
        this.produit = data;
        delete data.images[img];
        this.updateproduitphoto()
      },
      (error) => console.log(error)
    );

  }

  updateproduitphoto() {
    this.DataService.updateProduit(this.produit).subscribe(
      (data) => { console.log(data), this.ngOnInit() },

      (error) => console.log(error)
    );
  }


  public uploadImageExt(event) {
    for (let index = 0; index < event.length; index++) {

      const element = event[index];
      const contentType = event[index].type;
      const bucket = new S3({
        accessKeyId: 'AKIAXVWFAUBHPVQ7OO5C',
        secretAccessKey: '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',
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

