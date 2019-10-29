import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  newComment: any;
  product_id: any;
  productData: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newComment = { name: "", comment_content: "" }
    this.product_id = this._route.snapshot.paramMap.get("id");
    const obs = this._httpService.getOneProduct(this.product_id);
    obs.subscribe((data) => {
      this.productData = data['data'];

    })

    this.createComment(this.product_id);

  }

  // Create comment Route:-------------------
  createComment(id: string) {
    // console.log("Created New product", this.newComment);
    // console.log(this.product_id);
    // console.log("%%%%%%%%%%%%%%%%%%%%");
    const obs = this._httpService.createComment(this.product_id, this.newComment);
    obs.subscribe(data => {

      // console.log("TEST here", data);
      // console.log("Created Comment");
      
      // this.newComment = { name: "", comment_content: "" }
      this._router.navigate(["/products/all"]);
    })
  };
}