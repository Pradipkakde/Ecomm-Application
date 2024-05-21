import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit{
  addProductMessage:string | undefined;
  constructor(private product:ProductService){}
  ngOnInit(): void {
    
  }
  submit(data:product){
    this.product.addProudct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMessage="Product Successfully added";
      }
      setTimeout(() =>this.addProductMessage=undefined,3000 );
        
      
    })

  }

}
