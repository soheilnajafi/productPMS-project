import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Product } from '../model/product';
import { error } from 'console';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent {
  id: any;
  product: Product = new Product();

  constructor(
    private prdservice: ProductService,
    private router: Router,
    private activateRout: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activateRout.snapshot.params['id'];
    this.prdservice.getProductById(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  onSumit() {
    this.prdservice.updateProduct(this.id, this.product).subscribe(
      (data) => {
        this.productList();
      },

      (error) => console.log(error)
    );
  }

  productList() {
    this.router.navigate(['/list-product']);
  }
}
