import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {



  constructor(private prdservce: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  public product: Product[] = [];

  searchKey: string = '';

  p: number = 1;
  key: any = 'id';
  revers: boolean = false;

  sortProduct(ProductKey: any) {
    this.key = ProductKey;
    this.revers = !this.revers;
  }

  getProducts(): void {
    this.prdservce.getProductList().subscribe(
      data => this.product = data
    );
  }

  deleteProduct(id: number) {
    this.prdservce.deletePrd(id).subscribe((data) => {
      console.log(data);
      this.getProducts();
    });
  }

  detailProduct(id: number) {
    this.router.navigate(['detail', id]);
  }

  updateProduct(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
