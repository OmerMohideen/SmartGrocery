import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddProductResponse } from '../model/add-product-response.model';
import { ProductResponse } from '../model/product-response.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://host1.open.uom.lk/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addProduct(product: Product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,
      this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products');
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put<any>(this.baseUrl + 'api/products', product);
  }
}
