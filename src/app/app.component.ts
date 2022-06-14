import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './service/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excerciceADMR';



  constructor( public productService: ProductService) {
  }


  ngOnInit() {
    this.setProduct();
  }


  setProduct() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => this.productService.setProducts(data.products));
  }

}

