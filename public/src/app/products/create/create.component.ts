import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";



import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  imagePreview: string;
  form: FormGroup;
  product: {
    type: any;
    title: any;
    price: any;
    imgUrl: any;
    

  }

  constructor(
    private _httpService: HttpService,
    private _router: Router) { }


  ngOnInit() {
    this.form = new FormGroup({
      // type: new FormControl(null, {
      //   validators: [Validators.required]
      // }),
      type: new FormControl(null,{
        validators: [Validators.required]
      }),
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      
      price: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),

      // content: new FormControl(null, { validators: [Validators.required] }),
      imgUrl: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ imgUrl: file });
    console.log(this.form.get("imgUrl"));
    this.form.get("imgUrl").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.form.value.imgUrl = this.imagePreview;
      // console.log(this.imagePreview)
    };
    reader.readAsDataURL(file);
  }
  // Create New Product Route:---------------
  createProduct() {

    // console.log(this.form.value);

    let observable = this._httpService.createProduct(this.form.value);
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      // console.log(this.form.value);
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      // console.log(observable);
    observable.subscribe(data => {
      // console.log(data)
    // console.log("Product Successfully Created!");



    // Reroute to  All Products:
    this._router.navigate(["/products/all"]);
    });
  }

}