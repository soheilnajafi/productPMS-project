import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private backenEndpoint = 'http://localhost:8090/product/prd';

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.backenEndpoint}`);
  }

  deletePrd(id: number): Observable<Object> {
    return this.http.delete(`${this.backenEndpoint}/${id}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.backenEndpoint}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.http.put(`${this.backenEndpoint}/${id}`, product);
  }



  addProductDetails(Product: Product): Observable<any>{

    return this.http.post(`${this.backenEndpoint}`, Product);

  }





}
