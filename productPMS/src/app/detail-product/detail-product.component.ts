import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {

  product!: Product;
  id!: number;

  constructor(private prdservce: ProductService,
     private activeRout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activeRout.snapshot.params['id'];
    this.product= new Product();

    this.prdservce.getProductById(this.id).subscribe(

      data => {
        this.product = data;
      }
    )

  }

  updateProduct(id: number){

    
    this.router.navigate(['/edit', id]);
  }



}
