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

  openDialog(){
      const dialogRef = this.dialog.open(ProductDetailComponent, {
        width: '250px',
        data: {},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
  

