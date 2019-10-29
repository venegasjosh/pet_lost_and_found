import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
import { ActivatedRoute, Router, Params } from "@angular/router"

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedProduct= {};
  product_id: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.product_id = this._route.snapshot.paramMap.get("id");
    // console.log(this.product_id);
    const obs = this._httpService.getOneProduct(this.product_id);
    obs.subscribe((data) => {
      this.updatedProduct = data['data'];
      // console.log("the product", this.updateProduct);

    })

  }

  // Update Product Route:-------------------
  updateProduct(id) {

    // console.log("Updated Product", this.updatedProduct);
    const obs = this._httpService.updateProduct(this.updatedProduct);
    obs.subscribe((data) => {
      // console.log("Updated Product");
      this._router.navigate(["/products/all"]);
    })
  };
 
}