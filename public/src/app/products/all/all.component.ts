import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';


import { Post } from "../post.model";
import { PostsService } from "../post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @Input() products = [];
  newComment = { author: "", comment: "", id: ""};
  product_id: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  
  allComments = [];
  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this._httpService.getAllProducts().subscribe(data => {
      if(data["message"] == "Success") {
        this.products = data["data"];

        // console.log(this.products)
        this._router.navigate(["/products/all"]);
      }
    });
  }

  // Delete Product route: --------------------
  // deleteProduct(id: string) {
  //   if(confirm("Are you sure you want to delete this product?")) {
  //     this._httpService.deleteProduct(id).subscribe(data => {
  //       if(data["message"] == "Success") {
  //         this.getAllProducts();
  //       }
  //     });
  //   }
  // }
  
  createComment(id:string) {
    // console.log("Created New product", this.newComment);
    // console.log(this.newComment.id);
    // console.log("$$$$$$$$$$$$$$$$$$", id);
    const obs = this._httpService.createComment(id, this.newComment);
    obs.subscribe(data => {
      // console.log(data);
      // console.log("Created Comment");
      // console.log("TEST here", data);
      this.newComment = { author: "", comment: "", id: "" }
      this.getComment(id);
      this._router.navigate(["/products/all"]);
    })
  };

  getComment(id:string) {
    const obs = this._httpService.getOneProduct(id);
    obs.subscribe(data => {
      // console.log(data);
      // console.log("get Comment");
      // console.log("TEST here", data['data']['comments']);
      this.allComments =data['data']['comments'];
    })
  }
}