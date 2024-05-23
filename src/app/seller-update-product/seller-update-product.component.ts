import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  productData:undefined |product

  constructor(private route:ActivatedRoute ,private product:ProductService){}

  ngOnInit(): void {

    let productId= this.route.snapshot.paramMap.get('id');
    console.log(productId)
    
   productId &&this.product.getproduct(productId).subscribe((data)=>{
    console.log(data)
    this.productData=data;
   })

  }

  submit(data:any){
    console.warn("Updated")
  }

}
