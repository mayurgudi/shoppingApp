import { Component, OnInit } from "@angular/core";
import { products } from "../product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  products = [];

  constructor() {}

  ngOnInit() {
    this.products = products;
  }
}
