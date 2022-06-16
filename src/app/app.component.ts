import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from './service/product.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'excerciceADMR';



  constructor( public productService: ProductService, public dialog: MatDialog) {
  }


  ngOnInit() {
    this.setProduct();
  }


  setProduct() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => this.productService.setProducts(data.products));
  }

  openDialog(product:Product){
      const dialogRef = this.dialog.open(ProductDetailComponent, {
        width: '2000px',
        data: {title : product.title, description : product.description, price : product.price, rating: product.rating, stock: product.stock, images:product.images},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }


  export interface Product {
    id: number,
    title: string,
    description: string,
    price: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: [string]
}
  

