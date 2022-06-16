import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject = new BehaviorSubject<any>([]);


  public setProducts(products: any[]) {
    this.productsSubject.next(products);
  }

  public getProducts(): Observable<any> {
    return this.productsSubject.asObservable();
  }
}
