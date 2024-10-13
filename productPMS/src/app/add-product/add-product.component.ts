import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { NgForm } from '@angular/forms';

 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product = new Product();

constructor(private prdService: ProductService,  private router: Router){}



onSubmit(f: NgForm){
console.log(this.product);
this.addProduct();

f.reset();
}


addProduct(){
   this.prdService.addProductDetails(this.product).subscribe(
    data => {
      console.log(data)
      this.navigateToListProduct();
      
    }
   )
}



navigateToListProduct(){
  this.router.navigate(['/list-product']);
}




}

