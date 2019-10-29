import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
import { ActivatedRoute, Router, Params } from "@angular/router"

@Component({
  selector: 'app-edit',
  templateUrl: './showone.component.html',
  styleUrls: ['./showone.component.css']
})
export class ShowoneComponent implements OnInit {
  oneProduct= {};
  product_id: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.product_id = this._route.snapshot.paramMap.get("id");
    // console.log(this.product_id);
    const obs = this._httpService.getOneProduct(this.product_id);
    obs.subscribe((data) => {
      this.oneProduct = data['data'];
      // console.log("the product", this.oneProduct);

    })

  }

  // Delete Product route: --------------------
  deleteProduct(id: string) {
    if(confirm("Are you sure you want to delete this product?")) {
      this._httpService.deleteProduct(id).subscribe(data => {
        if(data["message"] == "Success") {
    this._router.navigate(["/products/all"]);






        }
      });
    }
  }

}