import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this.loadRoot();
  }
  loadRoot() {
    this._router.navigate(["/products/home"]);
  }
  
}